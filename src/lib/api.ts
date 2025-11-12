export interface Assignment {
    assignment_id: string;
    name: string;
    release_date: string;
    due_date: string;
    late_due_date: string | null;
    submissions_status: string;
    grade: string | null;
    max_grade: string | null;
}

export interface Course {
    name: string;
    full_name: string;
    semester: string;
    year: string;
    num_grades_published: string | null;
    num_assignments: string;
    assignments?: Assignment[];
}

export interface CoursesResponse {
    instructor: Record<string, Course>;
    student: Record<string, Course>;
    assignmentErrors?: { courseId: string; courseName: string; error: string }[];
}

export interface LoginResponse {
    message: string;
    status_code: number;
}

interface CacheData<T> {
    data: T;
    expiration: number;
}

/**
 * Cache utilities for session storage
 */
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

function getCachedData<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;

    try {
        const cached = sessionStorage.getItem(key);
        if (!cached) return null;

        const { data, expiration }: CacheData<T> = JSON.parse(cached);

        // Check if cache has expired
        if (Date.now() > expiration) {
            sessionStorage.removeItem(key);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error reading from cache:', error);
        return null;
    }
}

function setCachedData<T>(key: string, data: T): void {
    if (typeof window === 'undefined') return;

    try {
        const cacheData: CacheData<T> = {
            data,
            expiration: Date.now() + CACHE_DURATION
        };
        sessionStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error writing to cache:', error);
    }
}

/**
 * Login via Next.js API route
 */
export async function login(): Promise<LoginResponse> {
    const response = await fetch('/api/gs-login', {
        method: 'POST'
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Login failed' }));
        throw new Error(error.error || 'Login failed');
    }

    return response.json();
}

/**
 * Fetch courses via Next.js API route
 * Note: Must be called after successful login
 */
export async function getCourses(): Promise<CoursesResponse> {
    const cacheKey = 'gs-courses';

    // Check cache first
    const cached = getCachedData<CoursesResponse>(cacheKey);
    if (cached) {
        return cached;
    }

    const response = await fetch('/api/gs-courses', {
        method: 'GET'
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Failed to fetch courses' }));
        throw new Error(error.error || 'Failed to fetch courses');
    }

    const data = await response.json();

    // Filter out specific modules
    const filteredData: CoursesResponse = {
        ...data,
        student: Object.fromEntries(
            Object.entries(data.student).filter(([id]) =>
                id !== '1157856'
            )
        )
    };

    // Cache the result
    setCachedData(cacheKey, filteredData);

    return filteredData;
}

/**
 * Fetch assignments for a specific course
 */
export async function getAssignments(courseId: string): Promise<Assignment[]> {
    const cacheKey = `gs-assignments-${courseId}`;

    // Check cache first
    const cached = getCachedData<Assignment[]>(cacheKey);
    if (cached) {
        return cached;
    }

    const response = await fetch('/api/gs-assignments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ course_id: courseId }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Failed to fetch assignments' }));
        throw new Error(error.error || 'Failed to fetch assignments');
    }

    const assignments: Assignment[] = await response.json();

    // Filter out assignments
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const filteredAssignments = assignments.filter(assignment => {
        const dueDate = new Date(assignment.due_date);
        const isSubmitted = assignment.submissions_status === 'Submitted';

        // Filter out:
        // 1. Assignments that are past due AND submitted
        // 2. Assignments that are past due by more than a week AND not submitted
        if (isSubmitted && dueDate < now) {
            return false; // Past due and submitted - filter out
        }

        if (!isSubmitted && dueDate < oneWeekAgo) {
            return false; // More than a week overdue and not submitted - filter out
        }

        return true; // Keep the assignment
    });

    // Cache the result
    setCachedData(cacheKey, filteredAssignments);

    return filteredAssignments;
}

/**
 * Fetch courses, and fetch assignments for each course
 */
export async function getCoursesWithAssignments(): Promise<CoursesResponse> {
  const cacheKey = "gs-courses-with-assignments";

  // Check cache first
  const cached = getCachedData<CoursesResponse>(cacheKey);
  if (cached) {
    return cached;
  }

  // Fetch courses data
  const coursesData = await getCourses();

  // Track errors when fetching assignments
  const assignmentErrors: {
    courseId: string;
    courseName: string;
    error: string;
  }[] = [];

  // Fetch assignments for each student course
  const studentCoursesWithAssignments = await Promise.all(
    Object.entries(coursesData.student).map(async ([courseId, course]) => {
      try {
        const assignments = await getAssignments(courseId);
        return [courseId, { ...course, assignments }];
      } catch (error) {
        console.error(
          `Failed to fetch assignments for course ${courseId}:`,
          error
        );
        assignmentErrors.push({
          courseId,
          courseName: course.full_name,
          error:
            error instanceof Error
              ? error.message
              : "Failed to fetch assignments",
        });
        return [courseId, { ...course, assignments: [] }];
      }
    })
  );

  const result: CoursesResponse = {
    ...coursesData,
    student: Object.fromEntries(studentCoursesWithAssignments),
    assignmentErrors:
      assignmentErrors.length > 0 ? assignmentErrors : undefined,
  };

  // Cache the result
  setCachedData(cacheKey, result);

  return result;
}

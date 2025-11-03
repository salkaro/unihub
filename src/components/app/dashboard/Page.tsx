"use client";

// Local Imports
import UpcomingAssignments from './UpcomingAssignments';
import { AssignmentWithCourse, IAssignmentError } from './models';
import { Assignment, Course, getCoursesWithAssignments } from '@/lib/api';

// External Imports
import { Box, Container, Divider, useColorMode } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react'
import Modules from './Modules';


const Page = () => {
    const { colorMode } = useColorMode();
    const [modules, setModules] = useState<Record<string, Course>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [assignmentErrors, setAssignmentErrors] = useState<IAssignmentError[]>([]);

    const fetchModules = async (clearCache = false) => {
        setLoading(true);
        setError(null);
        setAssignmentErrors([]);

        // Clear cache if requested (for retry)
        if (clearCache && typeof window !== 'undefined') {
            sessionStorage.removeItem('gs-courses-with-assignments');
        }

        try {
            const data = await getCoursesWithAssignments();
            setModules(data.student);

            // Set assignment errors if any
            if (data.assignmentErrors && data.assignmentErrors.length > 0) {
                setAssignmentErrors(data.assignmentErrors);
            }
        } catch (err) {
            console.error('Failed to fetch modules:', err);
            setError(err instanceof Error ? err.message : 'Failed to load modules');
        } finally {
            setLoading(false);
        }
    };

    const handleRetry = () => {
        fetchModules(true); // Clear cache and retry
    };

    useEffect(() => {
        fetchModules();
    }, []);

    // Get all assignments from all courses and sort by due date
    const allAssignments = useMemo(() => {
        const assignments: AssignmentWithCourse[] = [];

        Object.entries(modules).forEach(([courseId, course]) => {
            if (course.assignments) {
                course.assignments.forEach((assignment: Assignment) => {
                    assignments.push({
                        ...assignment,
                        courseName: course.name,
                        courseFullName: course.full_name,
                        courseId: courseId
                    });
                });
            }
        });

        // Sort by due date (earliest first)
        return assignments.sort((a, b) => {
            const dateA = new Date(a.due_date);
            const dateB = new Date(b.due_date);
            return dateA.getTime() - dateB.getTime();
        });
    }, [modules]);


    return (
        <Box minH="100vh" bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}>
            <Container maxW="container.xl" py={8}>
                <UpcomingAssignments
                    loading={loading}
                    error={error}
                    assignmentErrors={assignmentErrors}
                    handleRetry={handleRetry}
                    allAssignments={allAssignments}
                />
                <Divider my={8} />
                <Modules
                    loading={loading}
                    error={error}
                    modules={modules}
                />
            </Container>
        </Box>

    )
}

export default Page

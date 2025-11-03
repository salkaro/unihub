import { Assignment } from "@/lib/api";

export interface AssignmentWithCourse extends Assignment {
  courseName: string;
  courseFullName: string;
  courseId: string;
}

export interface IAssignmentError {
  courseId: string;
  courseName: string;
  error: string;
}

export const WorkAssignmentStatus = {
  Active: "Active",
  ReAssigned: "ReAssign",
  Terminated: "Terminated",
} as const;

export type WorkAssignmentStatus =
  (typeof WorkAssignmentStatus)[keyof typeof WorkAssignmentStatus];

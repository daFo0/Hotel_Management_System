import { WorkDay } from "./enum/WorkDay";
import { WorkShift } from "./enum/WorkShift";
import { WorkAssignmentStatus } from "./enum/WorkAssignmentStatus";

export interface WorkAssignment {
  workAssignmentId: number;
  assigningManagerId: number;
  assignedEmployeeId: number;
  workDay: WorkDay;
  workShift: WorkShift;
  startDate: string;
  endDate: string;
  status: WorkAssignmentStatus;
}

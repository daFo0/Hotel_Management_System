import type { Role } from "./Role";

export interface Employee {
  employeeId: number;
  name: string;
  dateOfBirth: string;
  cccd: string;
  phone: string;
  email: string;
  role: Role;
}

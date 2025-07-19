import { Role } from "./enum/Role";

export interface Employee {
  employeeId: number;
  name: string;
  dateOfBirth: string;
  idNumber: string;
  phone: string;
  email: string;
  role: Role;
}

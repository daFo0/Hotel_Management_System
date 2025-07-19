import type { Role } from "./enum/Role";

export interface SalaryPolicy {
  salaryPolicyId: number;
  role: Role;
  baseSalary: number;
  overtimeRate: number;
  startDate: string;
  endDate: string;
}

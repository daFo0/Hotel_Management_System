// Role.ts
export const Role = {
  Manager: "manager",
  Receptionist: "receptionist",
  Maintenance: "maintenance",
  Housekeeping: "housekeeping",
  Accountant: "accountant",
  WarehouseStaff: "warehouseStaff",
  PurchasingStaff: "purchasingStaff",
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const PaymentStatus = {
  Paid: "Paid",
  UnPaid: "UnPaid",
  Partial: "Partial",
} as const;

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

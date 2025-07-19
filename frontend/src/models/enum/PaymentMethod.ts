export const PaymentMethod = {
  Cash: "Cash",
  E_Wallet: "E_Wallet",
  Bank: "Bank",
} as const;

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];

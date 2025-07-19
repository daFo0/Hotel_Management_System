export const WorkShift = {
  Morning: "6am - 14pm",
  Afternoon: "14pm - 22pm",
  Evening: "22pm - 6am",
} as const;

export type WorkShift = (typeof WorkShift)[keyof typeof WorkShift];

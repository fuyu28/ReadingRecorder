import { reviews } from "@prisma/client";

export type Review = reviews;

export type ReviewInput = Omit<Review, "read" | "memo"> &
  Partial<Pick<reviews, "read" | "memo">>;

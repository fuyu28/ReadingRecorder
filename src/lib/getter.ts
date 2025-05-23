import prisma from "./prisma";
import type { reviews } from "@/generated/prisma";

export async function getAllReviews(): Promise<reviews[]> {
  return await prisma.reviews.findMany({
    orderBy: {
      read: "desc",
    },
  });
}

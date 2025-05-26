"use server";

import { redirect } from "next/navigation";
import prisma from "./prisma";
import { getBookById } from "./getter";
import { Review } from "@/types/Review";

export async function addReview(data: FormData) {
  const id = data.get("id") as string;
  const readValue = data.get("read") as string;
  const memo = data.get("memo") as string;

  const book = await getBookById(id);
  const input: Omit<Review, "id"> = {
    title: book.title,
    author: book.author,
    price: Number(book.price),
    publisher: book.publisher,
    published: book.published,
    image: book.image,
    read: new Date(readValue),
    memo,
  };

  await prisma.reviews.upsert({
    update: input,
    create: { id, ...input },
    where: {
      id,
    },
  });

  redirect("/");
}

export async function removeReview(data: FormData) {
  const id = data.get("id") as string;

  await prisma.reviews.delete({
    where: {
      id,
    },
  });
  redirect("/");
}

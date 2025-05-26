import { Book, BookRes } from "@/types/Book";
import prisma from "./prisma";
import type { reviews } from "@prisma/client";
import { Review, ReviewInput } from "@/types/Review";

export async function getAllReviews(): Promise<reviews[]> {
  return await prisma.reviews.findMany({
    orderBy: {
      read: "desc",
    },
  });
}

export function createBook(book: Book): ReviewInput {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo?.listPrice;
  const img = book.volumeInfo.imageLinks;
  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(",") : "不明",
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher ?? "不明",
    published: book.volumeInfo.publishedDate ?? "不明",
    image: img ? img.smallThumbnail : "/vercel.svg",
  };
}

export async function getBooksByKeyword(
  keyword: string
): Promise<ReviewInput[]> {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&maxResults=20&printType=books`
  );
  const result: BookRes = await res.json();
  const books: ReviewInput[] = [];

  for (const b of result.items) {
    books.push(createBook(b));
  }
  return books;
}

export async function getBookById(id: string): Promise<ReviewInput> {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const result: Book = await res.json();
  return createBook(result);
}

export async function getReviewById(id: string): Promise<Review | null> {
  return await prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });
}

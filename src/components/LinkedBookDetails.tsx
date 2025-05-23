import Link from "next/link";
import BookDetails from "./BookDetails";
import { reviews } from "@/generated/prisma";

type LinkedBookDetailsProps = {
  index: number;
  book: reviews;
};

export default function LinkedBookDetails({
  index,
  book,
}: LinkedBookDetailsProps) {
  return (
    <Link href={`/edit/${book.id}`}>
      <div className="hover:bg-green-50">
        <BookDetails index={index} book={book} />
      </div>
    </Link>
  );
}

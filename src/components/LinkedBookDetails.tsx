import Link from "next/link";
import BookDetails from "./BookDetails";
import { ReviewInput } from "@/types/Review";

type LinkedBookDetailsProps = {
  index: number;
  book: ReviewInput;
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

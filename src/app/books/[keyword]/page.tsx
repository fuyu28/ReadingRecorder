import { getBooksByKeyword } from "@/lib/getter";
import LinkedBookDetails from "@/components/LinkedBookDetails";

export default async function BookResult({
  params,
}: {
  params: { keyword: string };
}) {
  const { keyword } = await params;
  const books = await getBooksByKeyword(keyword);

  return (
    <>
      <h2>「{keyword}」の検索結果</h2>
      {books.map((b, i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}

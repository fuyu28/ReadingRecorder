import { ReactNode } from "react";
import BooksLayoutClient from "./BooksLayoutClient";

export default function BooksLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BooksLayoutClient />
      <hr />
      {children}
    </>
  );
}

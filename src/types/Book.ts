// Google Books API の response
export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    imageLinks?: {
      smallThumbnail: string;
    };
  };
  saleInfo?: {
    listPrice?: {
      amount: number;
    };
  };
};

export type BookRes = {
  items: Book[];
};

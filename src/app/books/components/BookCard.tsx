import { Book } from '@prisma/client';
import { FC, Suspense } from 'react';
import { BookImage } from './BookImage';

type Props = {
  book: Book;
};

export const BookCard: FC<Props> = ({ book }) => {
  return (
    <div className="border w-48 h-72 rounded flex flex-col items-center justify-center gap-2">
      <Suspense fallback={<div>loading</div>}>
        <BookImage url={book.url} />
      </Suspense>
      <div>{book.title}</div>
      <div>{book.price}</div>
      <a href={book.url} target="_blank" rel="noopener noreferrer">
        {book.url}
      </a>
    </div>
  );
};

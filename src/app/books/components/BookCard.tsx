'use client';
import { Book } from '@prisma/client';
import { FC } from 'react';

type Props = {
  book: Book;
};

export const BookCard: FC<Props> = ({ book }) => {
  return (
    <div className="border w-48 h-72 rounded flex flex-col items-center justify-center gap-2">
      <img src={book.url} alt="book image" />
      <div>{book.title}</div>
      <div>{book.price}</div>
      <a href={book.url} target="_blank" rel="noopener noreferrer">
        {book.url}
      </a>
    </div>
  );
};

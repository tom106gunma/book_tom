'use client';
import { FC } from 'react';

type Props = {
  title: string;
  imageUrl: string;
};

export const BookCard: FC<Props> = ({ title, imageUrl }) => {
  return (
    <div className="border w-48 h-72 rounded flex flex-col items-center justify-center gap-2">
      <img src={imageUrl} alt="book image" />
      <div>{title}</div>
    </div>
  );
};

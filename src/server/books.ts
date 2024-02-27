'use server';

import { prisma } from '@/server/prisma/client';
import { Prisma } from '@prisma/client';

export const createBook = async (params: Prisma.BookCreateInput) => {
  const book = await prisma.book.create({
    data: params,
  });

  return book;
};

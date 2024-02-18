'use server';

import { prisma } from '@/server/prisma/client';

export const createBook = async () => {
  await prisma.book.create({
    data: {
      title: 'test',
      url: 'test',
      category: 'test',
      likes: 0,
      price: 10000,
    },
  });
};

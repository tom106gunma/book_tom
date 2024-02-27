import { createBook } from '@/server/books';
import { prisma } from '@/server/prisma/client';
import { Button, InputBase, NumberInput } from '@mantine/core';
import { CreateForm } from './components/CreateForm';

export default function Page() {
  return (
    <div className="">
      <CreateForm />
    </div>
  );
}

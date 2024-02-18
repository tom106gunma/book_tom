import { createBook } from '@/server/books';
import { prisma } from '@/server/prisma/client';
import { Button, InputBase, NumberInput } from '@mantine/core';

export default function Page() {
  return (
    <div className="">
      <form action={createBook} className="w-80" noValidate>
        <InputBase label="Title" placeholder="Title" required />
        <InputBase label="URL" placeholder="URL" required />
        <InputBase label="Category" placeholder="Category" required />
        <NumberInput label="Price" placeholder="0" required />
        <NumberInput label="Likes" placeholder="0" required />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

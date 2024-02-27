'use client';

import { createBook } from '@/server/books';
import { Button, NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Prisma } from '@prisma/client';
import { FC } from 'react';

type Props = {};

export const CreateForm: FC = () => {
  const form = useForm<Prisma.BookCreateInput>({
    initialValues: {
      title: '',
      url: '',
      category: '',
      price: 0,
      likes: 0,
    },
  });
  const handleSubmit = (data: Prisma.BookCreateInput) => {
    createBook(data);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className="w-80" noValidate>
      <TextInput label="Title" placeholder="Title" required {...form.getInputProps('title')} />
      <TextInput label="URL" placeholder="URL" required {...form.getInputProps('url')} />
      <TextInput
        label="Category"
        placeholder="Category"
        required
        {...form.getInputProps('category')}
      />
      <NumberInput label="Price" placeholder="0" required {...form.getInputProps('price')} />
      <NumberInput label="Likes" placeholder="0" required {...form.getInputProps('likes')} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

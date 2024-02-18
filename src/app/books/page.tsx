import { prisma } from '@/server/prisma/client';
import { BookCard } from './components/BookCard';

const getBooks = async () => {
  // const response = await fetch('https://www.googleapis.com/books/v1/volumes?q={search%20terms}');
  // const data = await response.json();
  // return data;

  const books = await prisma.book.findMany();
  return books;
};

export default async function Page() {
  const books = await getBooks();
  console.log(books);
  // const book = books.items[0];

  return (
    <div className="flex flex-wrap gap-2">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      {/* {books.items.map((item: any) => (
        <BookCard
          key={item.id}
          title={item.title}
          imageUrl={item.volumeInfo.imageLinks.thumbnail}
        />
      ))} */}
    </div>
  );
}

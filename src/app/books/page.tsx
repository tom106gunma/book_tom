import { BookCard } from './components/BookCard';

const getBooks = async () => {
  const response = await fetch('https://www.googleapis.com/books/v1/volumes?q={search%20terms}');
  const data = await response.json();
  return data;
};

export default async function Page() {
  const books = await getBooks();
  console.log(books);
  const book = books.items[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {books.items.map((item: any) => (
          <BookCard
            key={item.id}
            title={item.title}
            imageUrl={item.volumeInfo.imageLinks.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

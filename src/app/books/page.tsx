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
      <h1>Books</h1>
      <div className="flex flex-wrap gap-2">
        {books.items.map((item: any) => (
          <div key={item.id} className="border w-40 rounded">
            <div>{item.volumeInfo.title}</div>
            <img src={item.volumeInfo.imageLinks.thumbnail} alt="book image" />
          </div>
        ))}
      </div>
    </div>
  );
}

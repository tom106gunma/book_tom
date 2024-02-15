export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <div className="flex gap-2">
          <div className="font-bold">Category</div>
          <div>Psychology</div>
          <div>Computer Science</div>
          <div>Business</div>
        </div>
      </div>
      <h1>Books</h1>
      <div>{children}</div>
    </div>
  );
}

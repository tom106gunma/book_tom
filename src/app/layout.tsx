import '@/styles/globals.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ToggleTheme } from './components/ToggleTheme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <MantineProvider>
          <header className="flex items-end gap-4">
            <h1 className="font-bold text-3xl">BOOK^TOM</h1>
            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/books">Books</Link>
            </div>
            <ToggleTheme />
          </header>
          <main className="p-12">{children}</main>
          <footer className="text-center">ktom106gunma</footer>
        </MantineProvider>
      </body>
    </html>
  );
}

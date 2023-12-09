import './globals.css';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import ScrollTopButton from '@/Components/ScrollTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nicolas Gonzalez',
  description: 'Nicolas Gonzalez | Frontend Software Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5xl flex flex-col mx-auto items-center relative">
          <Navbar />
          {children}
          <ScrollTopButton limit={400} />
          <Footer />
        </div>
      </body>
    </html>
  );
}

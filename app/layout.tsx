import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Recursive } from "next/font/google";
import type { Metadata } from "next";
import clsx from 'clsx';

const recursive = Recursive({
  variable: "--font-recursive",
  // All available variable axes for Recursive 
  axes: ['CASL', 'CRSV', 'MONO', 'slnt'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urban Tech Creative",
  description: "We are a creative studio specialising in the use of tech to produce unique 3D digital narratives and insights for you and your audience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'min-h-[100dvh] flex flex-col',
          `${recursive.variable} antialiased`,
        )}
      >
        <Header />
        <main className='p-10 w-full max-w-4xl mx-auto'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

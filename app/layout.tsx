import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";

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
        className={`${recursive.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

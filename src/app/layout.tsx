import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const latoFont = Lato({ weight: ['400'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Institucional",
  description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={latoFont.className}>{children}</body>
    </html>
  );
}

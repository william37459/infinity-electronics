import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/app/ui/navbar';
import Footer from '@/app/ui/footer';
import { getProducts } from "./lib/get-all-products";


export const metadata: Metadata = {
  title: "Infinity Electronics",
  description: "Your one-stop shop for all things electronics.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getProducts();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

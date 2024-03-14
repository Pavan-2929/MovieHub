import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Category from "@/components/Category";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "moviehub",
  description: "Movie website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header />
        <Category/>
        <SearchBox/>
        {children}
      </body>
    </html>
  );
}

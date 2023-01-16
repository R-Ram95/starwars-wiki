import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { NavBar } from "../ui/NavBar";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <head />
      <body className="min-h-screen bg-dark-blue">
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}

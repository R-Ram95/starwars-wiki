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
        <div className="md:pl-52">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-xl bg-dark-blue p-3.5 md:p-6 drop-shadow-2xl  border border-blue-100">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

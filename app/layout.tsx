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
            <div className="rounded-md bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-md bg-black p-3.5 md:p-6">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Nanum_Myeongjo,
  Albert_Sans,
} from "next/font/google";
import "./globals.css";
import NavLink from "./components/NavLink";

// Nanum Myeongjo (main font)
const nanum = Nanum_Myeongjo({
  variable: "--font-nanum",
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Albert Sans (secondary)
const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P&P",
  description: "Power in Poetry & Prose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nanum.variable} ${albert.variable} bg-white relative`}
      >
        {/* navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 font-nanum bg-white shadow-2xs">
          <div className="flex flex-col items-center py-6">
            <NavLink href="home" className="text-2xl font-bold italic mb-4">
              P&P
            </NavLink>

            <div className="flex flex-row gap-12 justify-center">
              <NavLink href="home">Home</NavLink>
              <NavLink href="featured">Featured</NavLink>
              <NavLink href="collection">Collection</NavLink>
              <NavLink href="authors">Authors</NavLink>
              <NavLink href="about">About</NavLink>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-[#171717] text-[#EFEFEF] font-nanum">
          <div className="flex flex-col items-center py-12 px-10">
            <NavLink href="home" className="text-2xl font-bold italic mb-6">
              P&P
            </NavLink>
            <div className="flex flex-row gap-12 justify-center mb-8">
              <NavLink href="home">Home</NavLink>
              <NavLink href="featured">Featured</NavLink>
              <NavLink href="collection">Collection</NavLink>
              <NavLink href="authors">Authors</NavLink>
              <NavLink href="about">About</NavLink>
            </div>
            <p className="text-sm font-albert opacity-70">
              © {new Date().getFullYear()} Power in Poetry & Prose. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

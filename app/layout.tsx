import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./fragments/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bstack",
  description: "Where CS Players can network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col justify-between ${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen`}
      >
        <div>
          <Navbar />
        </div>
        <div className="mt-18 grow">
          {children}
        </div>
        <div>
          <footer className="flex py-3 px-4 items-center justify-start">
            <div>Created by Jonathan Nguyen</div>
          </footer>
        </div>
      </body>
    </html>
  );
}

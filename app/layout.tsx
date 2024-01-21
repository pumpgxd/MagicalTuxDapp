import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import FooterBar from "./components/navigation/footer";

const ubuntu= Ubuntu({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Magical Tux",
  description: "OP's #1 Cat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="flex flex-col h-screen">
        <Navbar/>
        {children}
        <FooterBar/>
        </div>
        </body>
    </html>
  );
}

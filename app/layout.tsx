import type { Metadata } from "next";
import { Geist, Geist_Mono, Prompt } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const prompt = Prompt({
  subsets: ['thai'],
  weight: ['400', '600', '700'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JIB",
  description: "Back to the Future: JIB 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${prompt.className} antialiased`}
      >
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}

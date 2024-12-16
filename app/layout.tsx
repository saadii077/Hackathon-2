import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/components/Layout/Header";
import { Josefin_Sans, Lato } from "next/font/google";
import Footer from "@/app/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${lato.variable} ${lato.className} overflow-x-hidden antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import Card from "./component/Card";
import Experience from "./component/Experience";
import Tamplate from "./component/Tamplate";
import Price from "./component/Price";

import Project from "./component/Project";
import Achievement from "./component/Achievement";
import Logo from "./component/Logo";
import About from "./component/About";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <Main/>
        <Card/>
        <Experience/>
        <Tamplate/>
        <Price />
        <Project/>
        <Achievement/>
        <Logo/>
        <About/>
        <Blog/>
        <Footer/>
        
        {children}
      </body>
    </html>
  );
}

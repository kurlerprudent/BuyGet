// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuyGet ICT Solutions",
  description: "BuyGet ICT Solutions specializes in software development, AI and robotics, cybersecurity,aerospace engineering, industrial automation,consumer electronics, and renewable energysolutions. With a strong foundation in cutting-edge technology and innivation. Buyget ICT Solutions is positioned to revolutionize multiple industries while ensuring security, eficiency, and growth in digital education and beyond.",
  twitter:{
    card: "summary_large_image",
    title: "BuyGet ICT Solutions",
    description: "BuyGet ICT Solutions provides custom web development, cybersecurity, and digital transformation services for businesses in Africa. Contact us for cutting-edge tech solutions",
  }
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" > 
    <head>
    <meta name="google-site-verification" content="alxkRaJUq9r0EnN8LF9ku9_mQEdUad6MTHpWIHnJqtM" />
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
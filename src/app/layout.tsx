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
  alternates:{
    canonical:"https://buyget.co",
  },
  icons:{
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
  },
  openGraph:{
    images:"/assets/opengraph-image.png",
    title: "BuyGet ICT Solutions",
    description: "BuyGet ICT Solutions provides custom web development, cybersecurity, and digital transformation services for businesses in Africa. Contact us for cutting-edge tech solutions",
    url: "https://buyget.co",
    type: "website",
    siteName: "BuyGet ICT Solutions",
  },
  
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
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "@name": "BuyGet ICT Solutions",
              "url": "https://buyget.co",
              "sameAs": [
                "https://www.linkedin.com/in/buyget-ict-solutions-36340435a",
                "https://www.instagram.com/buyget_ict_solutions/profilecard/?igsh=MTA2bG94bjZzNHExMA=="
              ]
            }`
          }}
    ></script>
          <meta property="og:title" content="BuyGet ICT Solutions" />
      <meta property="og:description" content="BuyGet ICT Solutions specializes in software development, AI and robotics, cybersecurity,aerospace engineering, industrial automation,consumer electronics, and renewable energysolutions. With a strong foundation in cutting-edge technology and innivation. Buyget ICT Solutions is positioned to revolutionize multiple industries while ensuring security, eficiency, and growth in digital education and beyond." />
      <meta property="og:image" content="/assets/opengraph-image.png" />
      <meta property="og:url" content="https://buyget.co" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BuyGet ICT Solutions" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_AU" />
      <meta property="og:locale:alternate" content="en_CA" />
      <meta property="og:locale:alternate" content="en_IN" />
      <meta property="og:locale:alternate" content="en_NZ" />

    </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
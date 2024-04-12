import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Sahil's Portfolio",
  description:
    "Discover the craftsmanship of a frontend developer through a captivating portfolio showcasing innovative designs and seamless user experiences. Explore my projects and let's bring your ideas to life together.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/images/ogimage.jpg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

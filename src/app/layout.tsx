import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/layout/Footer";
import Head from "next/head"; // Import Head for metadata injection

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Load Be Vietnam Pro with all the weights you need
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  // Include all the weights you plan to use
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // Include italic styles if needed
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Oysterr Talent – Employee Outsourcing Solutions",
  description:
    "A premium employee outsourcing services, connecting global businesses with skilled professionals. Whether you're seeking dedicated teams or individual talent, we provide tailored workforce solutions to meet your company's unique needs.",
  openGraph: {
    title: "Oysterr Talent – Employee Outsourcing Solutions",
    description:
      "A premium employee outsourcing services, connecting global businesses with skilled professionals.",
    images: [
      {
        url: "/images/og-image-oysterr.jpg", // local public path
        width: 1200,
        height: 630,
        alt: "Oysterr Talent Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oysterr Talent – Employee Outsourcing Solutions",
    description:
      "A premium employee outsourcing service, connecting global businesses with skilled professionals.",
    images: ["/images/og-image-oysterr.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* General Metadata */}
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description || "")} />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content={String(metadata.openGraph?.title || "")}
        />
        <meta
          property="og:description"
          content={String(metadata.openGraph?.description || "")}
        />
        {Array.isArray(metadata.openGraph?.images) &&
          metadata.openGraph.images.map((image, index) => (
            <meta key={index} property="og:image" content={String(image.url)} />
          ))}

        {/* Twitter Metadata */}
        {/* <meta
          name="twitter:card"
          content={String(metadata.twitter?.card || "")}
        /> */}
        <meta
          name="twitter:title"
          content={String(metadata.twitter?.title || "")}
        />
        <meta
          name="twitter:description"
          content={String(metadata.twitter?.description || "")}
        />
        {Array.isArray(metadata.twitter?.images) &&
          metadata.twitter.images.map((image, index) => (
            <meta key={index} name="twitter:image" content={String(image)} />
          ))}

        {/* Additional Metadata */}
        <meta name="color-scheme" content="light only" />
      </Head>
      <body className={`font-be-vietnam-pro antialiased bg-white`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

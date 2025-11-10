import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://fableblog.com"), // your live domain
  title: "Fable Blogs — Insightful Articles & Growth Content for Modern Thinkers",
  description:
    "Discover expert insights, learning resources, and innovative ideas on Fable Blogs — your trusted source for personal and professional growth.",
  keywords: [
    "Fable Blogs",
    "growth mindset",
    "self improvement",
    "learning",
    "motivation",
    "insightful articles",
    "personal development",
    "creative ideas",
  ],
  authors: [{ name: "Fable Team" }],
  creator: "Fable",
  publisher: "Fable",
  robots: "index, follow",
  alternates: {
    canonical: "https://fableblogs.com",
  },
  openGraph: {
    type: "website",
    url: "https://fableblogs.com",
    title:
      "Fable Blogs — Insightful Articles & Growth Content for Modern Thinkers",
    description:
      "Explore thought-provoking blogs and ideas that inspire growth and learning at Fable — your hub for curious minds.",
    siteName: "Fable Blogs",
    images: [
      {
        url: "/assets/logo2.png",
        width: 1200,
        height: 630,
        alt: "Fable Blogs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fable Blogs — Insightful Articles & Growth Content for Modern Thinkers",
    description:
      "Discover inspiring stories, insightful blogs, and growth ideas on Fable Blogs.",
    images: ["/assets/logo2.png"],
    creator: "@fableblogs",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

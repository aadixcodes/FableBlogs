// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Fable Blogs — Insightful Articles & Growth Content for Modern Thinkers",
//   description: "Discover expert insights, learning resources, and innovative ideas on Fable Blogs — your trusted source for personal and professional growth.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

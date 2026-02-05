

import { getBlogs } from "../lib/api";
import ArticleGrid from "../components/ArticleGrid";

import type { Metadata } from "next";
import SeoSchema from "@/components/SeoSchema";

// export const metadata: Metadata = {
//   title: "Tech Blog – Modern Articles",
//   description:
//     "Technology, design and lifestyle articles with modern development practices.",
//   openGraph: {
//     title: "Tech Blog – Modern Articles",
//     description:
//       "Technology, design and lifestyle articles with modern development practices.",
//     images: ["/og.png"],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Tech Blog – Modern Articles",
//     description: "Read modern tech articles",
//   },
// };
export const metadata: Metadata = {
  metadataBase: new URL("https://your-vercel-url.vercel.app"),

  title: "Tech Blog – Modern Articles",

  description:
    "Technology, design and lifestyle articles with modern development practices.",

  openGraph: {
    title: "Tech Blog – Modern Articles",
    description:
      "Technology, design and lifestyle articles with modern development practices.",
    images: ["/og.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tech Blog – Modern Articles",
    description: "Read modern tech articles",
  },
};


export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Tech Articles
      </h1>
        <SeoSchema />

      <ArticleGrid blogs={blogs} />
    </main>
  );
}

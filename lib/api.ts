import { ApiResponse, BlogPost } from "../types/blog";

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    // const res = await fetch(
    //   "https://sample-api-black.vercel.app/api/v1/blogs",
    //   {
    //     cache: "no-store",
    //   }
    // );
    const res = await fetch(
  "https://sample-api-black.vercel.app/api/v1/blogs",
  {
    next: { revalidate: 60 }
  }
);


    const data: ApiResponse = await res.json();

    // Requirement: EXACTLY 10 posts
    return data.blogs.slice(0, 10);
  } catch (error) {
    console.log("API Error", error);
    return [];
  }
}

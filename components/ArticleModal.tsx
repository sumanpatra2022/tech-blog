"use client";

import { useEffect } from "react";
import { BlogPost } from "../types/blog";
import Image from "next/image";

interface Props {
  blog: BlogPost;
  onClose: () => void;
}

export default function ArticleModal({ blog, onClose }: Props) {

  // Close with ESC
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-2xl w-full p-4 rounded max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="float-right text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-2">
          {blog.title}
        </h2>

        <Image
          src={blog.photo_url}
          alt={blog.title}
          width={600}
          height={300}
          unoptimized
        />

        <div
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: blog.content_html,
          }}
        />
      </div>
    </div>
  );
}

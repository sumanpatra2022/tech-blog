"use client";

import { useState } from "react";
import { BlogPost } from "../types/blog";
import ArticleCard from "./ArticleCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ArticleModal from "./ArticleModal";


interface Props {
  blogs: BlogPost[];
}

export default function ArticleGrid({ blogs }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<BlogPost | null>(null);


  // unique categories
  const categories = Array.from(
    new Set(blogs.map((b) => b.category))
  );

  const filtered = blogs.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.description.toLowerCase().includes(query.toLowerCase()) ||
      b.content_text.toLowerCase().includes(query.toLowerCase());

    const matchCategory =
      category === "all" || b.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section>
      <SearchBar value={query} onChange={setQuery} />

      <CategoryFilter
        categories={categories}
        active={category}
        onChange={setCategory}
      />

      <p className="mb-3">
        {filtered.length} results
      </p>

      {filtered.length === 0 && (
        <p className="text-red-500">No results found</p>
      )}

      <div className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
      ">
        {filtered.map((b) => (
          <ArticleCard key={b.id} blog={b} onClick={() => setSelected(b)} />
        ))}
      </div>
      {selected && (
  <ArticleModal
    blog={selected}
    onClose={() => setSelected(null)}
  />
)}
    </section>
  );
}

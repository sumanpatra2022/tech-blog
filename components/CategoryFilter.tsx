"use client";

interface Props {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-4 flex gap-2 flex-wrap">
      <button
        onClick={() => onChange("all")}
        className={`px-3 py-1 rounded ${
          active === "all" ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>

      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-3 py-1 rounded ${
            active === c ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

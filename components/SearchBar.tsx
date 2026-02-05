"use client";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

// export default function SearchBar({ value, onChange }: Props) {
//   return (
//     <input
//       className="w-full border p-2 rounded mb-4"
//       placeholder="Search articles..."
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//     />
//   );
// }

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="sr-only" htmlFor="search">
        Search articles
      </label>

      <input
        id="search"
        type="text"
        className="w-full border p-2 rounded"
        placeholder="Search articles..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}


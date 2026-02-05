import Image from "next/image";
import { BlogPost } from "../types/blog";
import { formatDate } from "../utils/formatDate";


interface Props {
  blog: BlogPost;
  onClick?: () => void;
}

export default function ArticleCard({ blog, onClick }: Props) {
  return (
    <article
      onClick={onClick}
      className="bg-white rounded shadow cursor-pointer hover:shadow-lg transition"
    >
<Image
  src={blog.photo_url}
  alt={blog.title}
  width={400}
  height={220}
  className="rounded-t"
  unoptimized
/>


      <div className="p-3">
        <h3 className="font-semibold text-lg">
          {blog.title}
        </h3>

        <p className="text-xs text-gray-500">
  {formatDate(blog.created_at)}
</p>


        <p className="text-sm text-gray-600 mt-2">
          {blog.description}
        </p>

        <span className="inline-block mt-2 text-xs bg-blue-100 px-2 py-1 rounded">
          {blog.category}
        </span>
      </div>
    </article>
  );
}

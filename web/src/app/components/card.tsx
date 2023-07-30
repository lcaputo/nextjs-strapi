import Link from "next/link";
import { STRAPI_URL } from "../config";
import { parseMarkdownToHTML } from "../utils/snarkdown";

export async function Card({
  key,
  title,
  description,
  imageUrl,
}: {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <Link
      key={key}
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={`${STRAPI_URL}${imageUrl}`}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(description) }} />
      </div>
    </Link>
  );
}

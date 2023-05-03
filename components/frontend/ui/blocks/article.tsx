import { PlayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArticleBlockProps {
  photo: string;
  link: string;
  title: string;
  description: string;
}

export default function ArticleBlock({
  photo,
  link,
  title,
  description,
}: ArticleBlockProps) {
  return (
    <div className="space-y-[15px] flex-none w-full md:w-[400px] text-left">
      <div className="h-[225px]">
        <Image
          width={1000}
          height={1000}
          src={photo}
          alt={title}
          className="image-cover"
        />
      </div>

      <h4 className="font-semibold">{title}</h4>

      <p className="line-clamp-2 text-sm text-secondary-500">{description}</p>

      <p>
        <Link
          href={link}
          className="inline-flex items-center gap-1.5 text-sm text-primary-900"
        >
          <span className="font-semibold border-b border-primary-900 leading-tight capitalize">Lire la suite</span>
          <PlayIcon className="w-2" />
        </Link>
      </p>
    </div>
  );
}

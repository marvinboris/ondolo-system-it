import { PlayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceBlockProps {
  link?: string;
  photo: string;
  title: string;
  description: string;
}

export default function ServiceBlock({
  link = "#",
  photo,
  title,
  description,
}: ServiceBlockProps) {
  return (
    <div className="group grid items-center gap-20 md:grid-cols-2">
      <div className="aspect-square md:group-even:order-2">
        <Image
          width={1000}
          height={1000}
          src={photo}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="space-y-[30px] text-center md:text-left md:group-even:order-1">
        <h3 className="text-[30px]/[1.21] font-bold md:text-[35px]">{title}</h3>

        <p className="text-sm">{description}</p>

        <p>
          <Link
            href={link}
            className="inline-flex items-center gap-1.5 text-sm text-primary-900"
          >
            <span className="border-b border-primary-900 font-semibold capitalize leading-tight">
              En savoir plus
            </span>
            <PlayIcon className="w-2" />
          </Link>
        </p>
      </div>
    </div>
  );
}

import Image, { ImageProps } from "next/image";
import React from "react";

export default function Logo({
  white = false,
  ...props
}: Omit<ImageProps, "height" | "src" | "alt"> & { white?: boolean }) {
  return (
    <div className="">
      <Image
        height={500}
        width={500}
        {...props}
        priority
        src={`/ondolo${white ? "-white" : ""}.svg`}
        alt="Logo"
        className="h-10 w-auto"
      />
    </div>
  );
  // return <span className="text-primary-600 font-bold text-3xl flex items-center space-x-1"><span>HIALA</span><TvIcon className="w-8" /></span>
}

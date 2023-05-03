import { classNames } from "@/utils/helpers";
import React from "react";

interface SolutionBlockProps {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  index: number;
  label: string;
  description: string;
}

export default function SolutionBlock({
  icon: Icon,
  index,
  label,
  description,
}: SolutionBlockProps) {
  return (
    <div
      className={classNames(
        "flex w-[200px] flex-none shadow-lg flex-col items-stretch justify-center gap-2.5 rounded-[10px] py-[50px] text-center transition-all duration-200",
        index === 0
          ? "bg-[#A1FFFF]"
          : index === 1
          ? "bg-[#FFEAA1]"
          : index === 2
          ? "bg-[#C5A1FF]"
          : index === 3
          ? "bg-[#F7A1FF]"
          : index === 4
          ? "bg-[#B4FFA1]"
          : "bg-secondary-100"
      )}
    >
      <Icon className="mx-auto h-[50px] w-[50px] object-contain text-black transition-all duration-200" />

      <h4 className="px-[25px] text-lg/[1.21] font-semibold">{label}</h4>

      <p className="px-5 text-sm/[1.21]">{description}</p>
    </div>
  );
}

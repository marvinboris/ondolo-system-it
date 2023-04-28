import React from "react";

interface SolutionBlockProps {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  label: string;
}

export default function SolutionBlock({
  icon: Icon,
  label,
}: SolutionBlockProps) {
  return (
    <div className="group flex aspect-square w-[200px] flex-none flex-col items-center justify-center gap-2.5 bg-secondary-100 px-[25px] text-center text-lg transition-all duration-200 hover:bg-orange hover:text-secondary-100">
      <Icon className="h-[50px] w-[50px] object-contain text-primary-900 transition-all duration-200 group-hover:text-secondary-100" />

      <p className="font-semibold">{label}</p>
    </div>
  );
}

import React, { InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/utils/helpers";

type InputProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  inputSize?: "sm" | "lg";
  label?: ReactNode;
};

export default function TextArea({
  label,
  inputSize = "lg",
  ...props
}: InputProps) {
  return (
    <div className={props.className}>
      {label ? (
        <label
          className="text-[10px] font-semibold text-secondary-500"
          htmlFor={props.id ? props.id : props.name}
        >
          {label}
        </label>
      ) : null}

      <div
        className={classNames(
          "mt-0.5",
          props.disabled ? "opacity-50" : "opacity-100"
        )}
      >
        <textarea
          {...props}
          rows={1}
          className="w-full border-0 border-b border-secondary-500 pb-[7px] bg-transparent outline-none placeholder:text-secondary-800"
        />
      </div>
    </div>
  );
}

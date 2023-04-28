import React, { InputHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/utils/helpers";
import IconType from "@/utils/types/icon";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "sm" | "lg";
  icon?: IconType;
  label?: ReactNode;
  addon?: ReactNode;
  append?: ReactNode;
};

export default function Input({
  icon: Icon,
  label,
  addon,
  append,
  inputSize = "lg",
  className,
  ...props
}: InputProps) {
  return (
    <div className={className}>
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
        <input
          {...props}
          className="w-full border-0 border-b border-secondary-500 pb-[7px] bg-transparent outline-none placeholder:text-secondary-800"
        />
      </div>
    </div>
  );
}

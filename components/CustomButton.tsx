"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  containerStyle,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      onClick={handleClick}
      className={`custom-btn ${containerStyle}`}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right arrow"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;

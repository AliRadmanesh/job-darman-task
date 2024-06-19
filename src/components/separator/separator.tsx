import React from "react";

type SeparatorProps = {
  text?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ text }) => {
  if (text && Boolean(text.length)) {
    return (
      <div className="flex items-center gap-x-4 w-full my-3">
        <hr className="w-full h-[2px] text-separator-text" />
        <span className="font-dm-sans text-separator-text">{text}</span>
        <hr className="w-full h-[2px] text-separator-text" />
      </div>
    )
  }

  return (
    <hr className="w-full h-[2px] text-separator-text my-3" />
  )
}

import React from "react"

type ButtonProps = {
 text: string;
 classNames?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, classNames  }) => {
  return (
    <button className={`text-white text-lg font-medium font-dm-sans bg-blue px-6 lg:px-9 py-3 lg:py-4 rounded-[100px] z-10 ${classNames}`}>{text}</button>
  )
}

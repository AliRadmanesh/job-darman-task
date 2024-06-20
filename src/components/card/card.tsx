import React, { ReactNode } from "react"

type CardProps = {
  classNames?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ classNames = "", children }) => {
  return (
    <div className={`w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] bg-white rounded-lg ${classNames}`}>
      {children}
    </div>
  )
}

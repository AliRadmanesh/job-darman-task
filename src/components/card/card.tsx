import React, { ReactNode } from "react"

type CardProps = {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] bg-white rounded-lg">
      {children}
    </div>
  )
}

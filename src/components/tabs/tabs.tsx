import React, { ReactNode } from "react"

type TabsProps = {
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <div className="flex items-center border-b border-b-border">
      {children}
    </div>
  )
}

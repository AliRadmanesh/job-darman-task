import React from "react"

type TabProps = {
  text: string;
  active?: boolean;
}

export const Tab: React.FC<TabProps> = ({ text, active }) => {
  return (
    <div className={`font-dm-sans text-sm text-center py-2 md:py-4 w-1/2 ${active ? 'text-tab-active' : 'text-tab'}`}>{text}</div>
  )
}

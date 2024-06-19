import React from "react"

type TabProps = {
  text: string;
  active?: boolean;
}

export const Tab: React.FC<TabProps> = ({ text, active }) => {
  return (
    <div className={`font-dm-sans font-bold text-sm text-center py-2 md:py-4 w-1/2 cursor-pointer ${active ? 'text-tab-active border-b-2 border-b-tab-active' : 'text-tab'}`}>{text}</div>
  )
}

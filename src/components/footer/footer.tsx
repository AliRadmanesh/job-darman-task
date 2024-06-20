import { Separator } from "components/separator";
import { bottomNavItems, topNavItems } from "./nav-items";

export const Footer = () => (
  <footer className="mt-16 mx-auto bg-navy">
    <div className="flex justify-between items-center pt-12 pb-4 px-28">
      <p className="text-white font-dm-sans font-bold text-2xl">{"Startup 3"}</p>
      <nav className="flex items-center gap-x-4">
      {topNavItems.map(({ id, href, text, icon }) => (
        <a key={id} href={href} className="font-dm-sans font-medium text-white text-xs md:text-sm lg:text-base">{text || icon}</a>
      ))}
      </nav>
    </div>
    <Separator />
    <div className="flex justify-between items-center pt-5 pb-10 px-28">
      <nav className="flex items-center gap-x-4">
        {bottomNavItems.map(({ id, href, text, icon }) => (
          <a key={id} href={href} className="font-dm-sans font-medium text-white text-xs md:text-sm lg:text-base">{text || icon}</a>
        ))}
      </nav>
      <p className="text-white font-dm-sans text-base">{"© 2017 Designmodo. All rights reserved."}</p>
    </div>
  </footer>
);

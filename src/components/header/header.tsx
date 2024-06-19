import { navItems } from "./nav-items";

export const Header = () => (
  <header className="pt-16 z-10 relative max-w-screen-lg mx-auto">
    <nav className="flex items-center justify-center mx-auto gap-x-3 sm:gap-x-4 md:gap-x-8 lg:gap-x-11 text-white">
      {navItems.map(({ id, href, text, icon }) => (
        <a key={id} href={href} className="font-dm-sans font-medium text-sm md:text-base lg:text-lg">{text || icon}</a>
      ))}
      </nav>
  </header>
);

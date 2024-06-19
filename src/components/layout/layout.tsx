import { ReactNode } from "react";

import { Footer } from "components/footer";
import { Header } from "components/header";

type LayoutProps = {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

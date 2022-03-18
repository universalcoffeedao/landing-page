import React from "react";
import Header from "./Navbar/Header";
import Footer from "./Footer/Footer";

// typescript tyle
type ILayout = {
  children: React.ReactNode;
};

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

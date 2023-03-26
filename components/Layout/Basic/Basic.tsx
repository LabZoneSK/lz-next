import React from "react";

// Components
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

const Basic = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Basic;

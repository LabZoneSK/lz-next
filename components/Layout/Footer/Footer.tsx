import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      © {new Date().getFullYear()} LabZone s.r.o
    </footer>
  );
};

export default Footer;

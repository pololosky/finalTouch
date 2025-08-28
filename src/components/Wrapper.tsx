import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavBar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;

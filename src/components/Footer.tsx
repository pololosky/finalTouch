import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex gap-1 justify-center md:text-lg text-sm md:text-right text-center px-2 md:py-3 py-1">
      <p>Droits d&#39;auteur 2025FinalTouch, par{" "}</p>
      <Link
        href={"https://x.com/@pololosky005"}
        target="_blank"
        className="text-accent"
      >
        Pololosky
      </Link>
    </footer>
  );
};

export default Footer;

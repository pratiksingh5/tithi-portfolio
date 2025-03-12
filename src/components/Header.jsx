"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="navbar-wrapper">
      <nav className="navbar" id="navbar">
        <div className="navbar__logo">
          <a href="/">
            <span className="navbar__name">tithi choudhary</span>
            <i className="twa twa-tulip"></i>
          </a>
        </div>
        <ul className="navbar__links">
           <li className={`navbar__link ${pathname === "/" ? "font-semibold" : ""}`}>
            <Link href="/">home</Link>
          </li>
          <li>/</li>
          <li className={`navbar__link ${pathname === "/about" ? "font-semibold" : ""}`}>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

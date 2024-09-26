"use client";

import React, { useState } from "react";
import Logo from "../logo";
import NavItems from "./nav-items";
import "./navigation.css";
import Offcanvas from "./offcanvas";
import MenuIcon from "@/icons/menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="bg-white py-1">
      <div className="container">
        <div className="flex sm:hidden items-center justify-center relative">
          <button
            className="absolute inset-y-0 left-0 flex items-center w-12 h-12 justify-center -ml-3"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon width={24} height={24} />
          </button>
          <Logo />
        </div>
        <div className="hidden sm:flex items-center">
          <div className="flex-1">
            <Logo />
          </div>
          <NavItems />
        </div>
      </div>
      <Offcanvas isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navigation;

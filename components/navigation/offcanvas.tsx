import React from "react";
import Logo from "../logo";
import NavItems from "./nav-items";
import CloseIcon from "@/icons/close";

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Offcanvas = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <>
      <div
        className="transition-transform duration-300 ease-in-out fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform -translate-x-full"
        style={{
          ...(isMenuOpen && { transform: "none", visibility: "visible" }),
        }}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <button aria-label="close" onClick={toggleMenu}>
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <div className="flex flex-grow overflow-y-auto flex-col p-4">
          <NavItems />
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75"
          aria-hidden="true"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Offcanvas;

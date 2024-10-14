import React from "react";

interface Props {
  title?: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <header className="text-center">
      {title && <h1 className="mb-2">{title}</h1>}
      <p className="text-lg md:text-xl">{subtitle}</p>
    </header>
  );
};

export default Header;

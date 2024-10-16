import { HeaderProps } from "./types";

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="my-12 text-center">
      <div className="container">
        <h1 className="mb-2">{title}</h1>
        <p className="text-lg md:text-xl mx-auto" style={{ maxWidth: 600 }}>
          {subtitle}
        </p>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useRef } from "react";
import "./Header.scss";

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ setHeaderHeight, isScrolled }) => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderHeight(headerRef.current?.offsetHeight || 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderHeight]);

  return (
    <header
      className={`header ${isScrolled ? "header--scrolling" : ""}`}
      ref={headerRef}
    >
      <div className="header__inner">
        <h1 className="logo">
          <img
            className="logo__holder"
            src="https://i.imgur.com/sOCVfKv.png"
            alt="Logo"
          />
          <p className="logo__title">Hieu Tran</p>
        </h1>
        <nav className="menu">
          <a className="menu__item" href="#">
            Indie Game
          </a>
          <a className="menu__item" href="#">
            Entry Game
          </a>
          <a className="menu__item" href="#">
            Community
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

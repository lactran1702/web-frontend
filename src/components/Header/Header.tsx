import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ setHeaderHeight, isScrolled }) => {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHeaderHeight(headerRef.current?.offsetHeight || 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderHeight]);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuVisible(window.innerWidth < 768 ? isMenuVisible : false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuVisible]);

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
        <nav className={`menu ${isMenuVisible ? "menu--isShow" : ""}`}>
          <p
            className={`menu__button ${
              isMenuVisible ? "menu__button--isOpen" : ""
            }`}
            onClick={toggleMenu}
          >
            <span className="button button_left"></span>
            <span className="button button_right"></span>
          </p>
          <ul
            className={`menu__list ${
              isMenuVisible ? "menu__list--isShow" : ""
            }`}
          >
            <li className="menu__item">
              <a href="#">Indie Game</a>
            </li>
            <li className="menu__item">
              <a href="#">Entry Game</a>
            </li>
            <li className="menu__item">
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

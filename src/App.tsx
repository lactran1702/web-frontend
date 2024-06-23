import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const App: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header setHeaderHeight={setHeaderHeight} isScrolled={isScrolled} />
      <Content headerHeight={headerHeight} isScrolled={isScrolled} />
    </div>
  );
};

export default App;

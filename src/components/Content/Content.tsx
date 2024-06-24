import React from "react";
import "./Content.scss";
import cards from "../../data/card";

interface ContentProps {
  headerHeight: number;
  isScrolled: boolean;
}

const Content: React.FC<ContentProps> = ({ headerHeight, isScrolled }) => (
  <div
    className="content"
    style={{
      paddingTop: isScrolled ? `${headerHeight / 16 + 1.25}rem` : "",
    }}
  >
    <div className="content__inner">
      <h2 className="content__title">Photo Cards:</h2>
      <ul className="card">
        {cards.map((card, index) => (
          <li key={index} className="card__item">
            <img
              className="card__image"
              src={card.image}
              alt={`Card ${index}`}
            />
            <p className="card__text">{card.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Content;

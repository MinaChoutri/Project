import { render } from "@testing-library/react";
import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Ce que nous vous proposons</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/imgseo.png"
              text="Vos liens de seront bien au chaud"
              label="Backlinks for SEO"
              path="/les-meilleurs-sites-pour-vos-backlinks"
            />
            <CardItem
              src="images/articleseo.jpg"
              text="Nos articles à valeur ajouté"
              label="Content for SEO"
              path="/service-creation-article-et-contenu"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/imgseo.png"
              text="Vos liens de seront bien au chaud"
              label="Backlinks for SEO"
              path="/les-meilleurs-sites-pour-vos-backlinks"
            />
            <CardItem
              src="images/articleseo.jpg"
              text="Nos articles à valeur ajouté"
              label="Content for SEO"
              path="/service-creation-article-et-contenu"
            />
            <CardItem
              src="images/articleseo.jpg"
              text="Nos articles à valeur ajouté"
              label="Content for SEO"
              path="/service-creation-article-et-contenu"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;



import React from "react";
import Carousel from "./SpecialsCarousel";
import GreekSaladImage from "../../../assets/food/greek-salad.webp";
import BruschettaImage from "../../../assets/food/bruschetta.jpeg";
import LemonDessertImage from "../../../assets/food/lemon-dessert.webp";
import SpecialCard from "./CardInfo/SpecialCard";
import "./Specials.css"; // Import the CSS file for styles

export default function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This Week's Delights</h1>
        <a
          className="action-button"
          href={require("../../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Explore Menu
        </a>
      </article>

      <section className="specials-cards">
        <SpecialCard
          image={GreekSaladImage}
          name="Mediterranean Delight"
          price="$14.99"
          description="A delightful mix of fresh greens, tomatoes, feta cheese, and olives. Seasoned with herbs and drizzled with olive oil."
        />
        <SpecialCard
          image={BruschettaImage}
          name="Italian Toasted Feast"
          price="$18.99"
          description="Toasted bread topped with ripe tomatoes, prosciutto, and melted cheese. Sprinkled with Mediterranean spices and olive oil."
        />
        <SpecialCard
          image={LemonDessertImage}
          name="Zesty Lemon Bliss"
          price="$9.50"
          description="Homemade lemon-infused bread, coated in a sweet blend of citrus and lemon zest. A perfect treat for your sweet tooth."
        />
      </section>

      <section className="specials-carousel">
        <Carousel />
      </section>
    </section>
  );
}

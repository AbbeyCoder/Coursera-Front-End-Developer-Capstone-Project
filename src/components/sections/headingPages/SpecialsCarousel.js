

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SpecialCard from "./CardInfo/SpecialCard";

import GreekSaladImage from "../../../assets/food/greek-salad.webp";
import BruschettaImage from "../../../assets/food/bruschetta.jpeg";
import LemonDessertImage from "../../../assets/food/lemon-dessert.webp";

const carouselItems = [
  {
    image: GreekSaladImage,
    name: "Customized Greek Salad",
    price: "$15.99",
    description: "Fresh Feta Cheese, ripe tomatoes, and crisp lettuce",
  },
  {
    image: BruschettaImage,
    name: "Deluxe Bruschetta",
    price: "$19.99",
    description: "Sliced bread topped with mango and green onions",
  },
  {
    image: LemonDessertImage,
    name: "Luscious Lemon Dessert",
    price: "$10.50",
    description: "Delicious Lemon bread with a layer of vanilla icing",
  },
];

export default function SpecialsCarousel() {
  return (
    <Carousel infiniteLoop autoPlay interval={5000} showStatus={false}>
      {carouselItems.map((item, index) => (
        <SpecialCard
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </Carousel>
  );
}

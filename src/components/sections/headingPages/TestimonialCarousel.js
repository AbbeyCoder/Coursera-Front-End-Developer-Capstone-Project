
import React from "react";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./CardInfo/TestimonialCard";

export default function TestimonialCarousel() {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showStatus={false}
    >
      <TestimonialCard
        name="Elegant Eats"
        description="Delight your taste buds with our exquisite and wholesome food services."
      />
      <TestimonialCard
        name="Savor Specialist"
        description="Indulge in an extraordinary culinary experience; our unique dishes are not to be missed."
      />
      <TestimonialCard
        name="Ambiance Admirer"
        description="Enjoy good food in a pleasant ambiance with varied, but consistently good service."
      />
      <TestimonialCard
        name="Family-Friendly Fan"
        description="Great food, friendly staff, and a cozy atmosphere make it an ideal spot for treating your kids."
      />
      <TestimonialCard
        name="Night Shift Refresh"
        description="Our food provides a refreshing break after a late-night shift at the local supply depot."
      />
      <TestimonialCard
        name="East Coast Traveler"
        description="After a 5-hour flight from the East Coast, our delicious food is the perfect post-trip treat."
      />
      <TestimonialCard
        name="Chicago Fire"
        description="Experience the culinary fire! Everyone in Chicago should try our place at least once."
      />
      <TestimonialCard
        name="Study Night Savior"
        description="A perfect dinner spot after a long night of studying. Definitely ordering from here again!"
      />
    </Carousel>
  );
}

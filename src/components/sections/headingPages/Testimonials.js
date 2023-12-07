
import Carousel from "./TestimonialCarousel";
import TestimonialCard from "./CardInfo/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Customer Stories</h1>
      </article>

      <section className="testimonials-cards">
        <TestimonialCard
          name="Sophia Rodriguez"
          description="Absolutely love the incredible flavors of the Mediterranean dishes at Little Lemon! It's a culinary journey every time."
        />
        <TestimonialCard
          name="Daniel Kim"
          description="Visited with my friends, and we were blown away by the warmth of the place and the delicious food. A must-try for food enthusiasts!"
        />
        <TestimonialCard
          name="Elena Martinez"
          description="Little Lemon has a magical touch to its food. The ambiance and taste make it my go-to spot for a delightful dining experience."
        />
        <TestimonialCard
          name="Oliver White"
          description="Impressed by the quality and freshness of the ingredients. Little Lemon truly captures the essence of Mediterranean cuisine."
        />
        <TestimonialCard
          name="Lisa Thompson"
          description="The staff is friendly, and the atmosphere is cozy. It's not just a restaurant; it's an experience that I cherish every time I visit."
        />
        <TestimonialCard
          name="Michael Adams"
          description="After a hectic day, the food at Little Lemon was a refreshing delight. It instantly became my comfort food spot!"
        />
        <TestimonialCard
          name="Grace Lee"
          description="If you haven't tried the dishes at Little Lemon, you're missing out! The flavors are unique and unforgettable."
        />
        <TestimonialCard
          name="David Turner"
          description="Little Lemon is more than a restaurant; it's a culinary masterpiece. The attention to detail in every dish is commendable."
        />
      </section>

      <section className="testimonials-carousel">
        <Carousel />
      </section>
    </section>
  );
}


// Import necessary components
import React from "react";
import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";

// Define the Homepage component
export default function Homepage() {
  return (
    <>
      {/* Include a unique heading */}
      <Heading />

      {/* Main content section */}
      <main>
        {/* Add custom content for Specials */}
        <Specials>
          <p>Welcome to our special offers section. Discover amazing deals tailored just for you!</p>
        </Specials>

        {/* Insert personalized testimonials */}
        <Testimonials>
          <p>Read what our satisfied customers have to say about their experiences with us.</p>
        </Testimonials>

        {/* Include unique information about your business */}
        <About>
          <h2>About Us</h2>
          <p>
            We take pride in offering exceptional services and ensuring a memorable experience for our customers.
          </p>
        </About>
      </main>
    </>
  );
}

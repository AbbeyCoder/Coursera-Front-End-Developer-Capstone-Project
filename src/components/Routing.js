
// Import necessary components and elements
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";

// Define the Routing component
export default function Routing() {
  return (
    <Routes>
      {/* Route for the homepage */}
      <Route path="/" element={<Homepage />} />

      {/* Route for the about page */}
      <Route path="/about" element={<About />} />

      {/* Route for reservations page */}
      <Route path="/reservations" element={<Reservation />} />

      {/* Route for the order page */}
      <Route path="/order" element={<Order />} />

      {/* Route for the login page */}
      <Route path="/login" element={<Login />} />

      {/* Route for the confirmation page */}
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

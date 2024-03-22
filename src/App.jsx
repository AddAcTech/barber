import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import InstagramPosts from "./components/InstagramPosts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <InstagramPosts />
      <Footer />
    </div>
  );
}

export default App;

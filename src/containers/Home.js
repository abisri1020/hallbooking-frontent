import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Contact from "../components/contact";
import FeaturedHalls from "../components/FeaturedHalls";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          tittle="HALL FOR A PERFECT OCCASION"
          subtitle="convenient and classy halls starts at 80,000INR"
        >
          <Link to="/halls" className="btn-primary">
            our halls
          </Link>
        </Banner>
      </Hero>
      <FeaturedHalls />
      <Contact />
    </>
  );
};

export default Home;

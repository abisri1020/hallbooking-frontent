import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HallWithId from "../components/HallWithId";

const SingleHall = () => {
  return (
    <>
      <Hero hero="singleHero">
        <Banner tittle="Your selected Hall">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </Banner>
      </Hero>
      <HallWithId />
    </>
  );
};

export default SingleHall;

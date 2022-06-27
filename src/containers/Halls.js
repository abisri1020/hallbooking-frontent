import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import axios from "axios";
import Halls from "../components/Hall";
import { API } from "../config";

const HallsPage = () => {
  const [halls, setHalls] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${API}/halls`)
      .then((res) => setHalls(res.data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      <Hero hero="hallsHero">
        <Banner tittle="Our Halls">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <section className="featured-halls">
        <Halls halls={halls} />
      </section>
    </>
  );
};

export default HallsPage;

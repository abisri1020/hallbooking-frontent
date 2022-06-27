import React, { useEffect, useState } from "react";
import Title from "./Title";
import axios from "axios";
import Halls from "./Hall";
import { API } from "../config";


const FeaturedHalls = () => {
  
  const [halls, setHalls] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${API}/halls`)
      .then((res) => setHalls(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="featured-halls">
      <Title title="Featured Halls" />
      <Halls halls={halls} />
    </section>
  );
};

export default FeaturedHalls;

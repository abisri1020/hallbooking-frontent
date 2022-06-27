import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {API} from '../config';

function HallWithId() {

  const { slug } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/halls/${slug}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <section className="single-hall">
        <div className="single-hall-images">
          <img src={data.image} alt="hall" />
        </div>
        <div className="single-hall-info">
          <article className="desc">
            <h3>{data.halltype}</h3>
            <p>{data.description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : INR {data.price}</h6>
            <h6>Halls :{data.halls}</h6>
            <h6>Seats : {data.seats}</h6>
          </article>
        </div>
      </section>
      <section className="hall-extras">
        <h6>Extra Features </h6>
        <ul className="extras">
          {data.utilitise
            ? data.utilitise.map((item, index) => <li key={index}> {item}</li>)
            : null}
        </ul>
      </section>
      <Link to="/bookingForm" className="btn-info ">
        BOOK NOW
      </Link>
    </>
  );
}

export default HallWithId;

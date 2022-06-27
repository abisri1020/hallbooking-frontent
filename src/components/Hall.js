import React from "react";
import { Link } from "react-router-dom";

function Hall({ halls }) {
  console.log(halls);
  return (
    <div className="featured-halls-center">
      {halls.map((hall, key) => (
        <article className="hall">
          <div className="img-container">
            <img src={hall.image} alt="halls" />
            <div className="price-top">
              <h6>INR {hall.price}</h6>
              <p>per day</p>
            </div>

            <Link to={`/halls/${hall._id}`} className="btn-primary hall-link">
              Features
            </Link>
          </div>
          <p className="hall-info">{hall.halltype}</p>
        </article>
      ))}
    </div>
  );
}

export default Hall;

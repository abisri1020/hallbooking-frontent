import React, { useState } from "react";
import Title from "./Title";
import { FaPhoneAlt, FaMapMarked, FaMailBulk } from "react-icons/fa";

export default function Contact() {
  const services = [
    {
      icon: <FaPhoneAlt />,
      title: "For Bookings Contact",
      info: "Phone: 5645342 ; 9890989098",
    },
    {
      icon: <FaMailBulk />,
      title: "Mail To Us",
      info: "Mail:bookmyhall@mail.in",
    },
    {
      icon: <FaMapMarked />,
      title: "Head Office",
      info: "Chennai",
    },
  ];
  const [state] = useState(services);

  return (
    <section className="services">
      <Title title="Contact" />
      <div className="services-center">
        {state.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

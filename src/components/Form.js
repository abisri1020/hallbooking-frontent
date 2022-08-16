import React, { useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { API } from "../config";
import StripeContainer from '../components/StripeContainer';

const BookingForm = () => {

  const [halls, setHalls] = useState([]);
  const [error, setError] = useState("");
  const [hallbooking, setHallbooking] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [customer, setCustomer] = useState({
    customerName: "",
    email: "",
    phoneNumber: "",
    govtidentityProof: "",
  });

  const handleCustomer = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };
  
  const handleHall = (e) => {
    setHalls([...halls, e.target.value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      customer,
      halls,
    };
    try {
      const infoToBook = await fetch(
        `${API}/customers/addNewCustomer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const response = await infoToBook.status;
      setHallbooking(true);
      return response === 400
        ? setError("please check the input the fields correctly")
        : null;
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <Hero hero="hallsHero">
        <Banner tittle="Book Your Hall Now">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>

      {/* {hallbooking ? (
        <h5>
          {error
            ? error
            : "Booking successful "}
        </h5>
      ) : (
        <> */}
          {/* <h3 className="book">Fill the Form To Book Your Hall</h3>
          <form className="bookingform" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer Name:</label>
            <input
              type="text"
              name="customerName"
              placeholder="Enter Name"
              value={customer.customerName}
              id="NameInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={customer.email}
              id="EmailInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="Number"
              name="phoneNumber"
              placeholder="Enter Phone number"
              value={customer.phoneNumber}
              id="PhoneInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="govtidentityProof">Govt Identity Proof:</label>
            <input
              type="Number"
              name="govtidentityProof"
              placeholder="Enter ID Proof Number"
              value={customer.govtidentityProof}
              id="govtIdentityInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="HallType">
              Select Hall Type:
              <select multiple={true} value={halls} onChange={handleHall}>
                <option value="62b71359d49f6f971fe021b2">
                  WEDDING HALL
                </option>
                <option value="62b73229d49f6f971fe021b3">
                  BANQUET HALL
                </option>
                <option value="62b73cd7d49f6f971fe021b6">
                  PARTY HALL
                </option>
                <option value="62b740bbd49f6f971fe021b7">
                  SEMINAR HALL
                </option>
              </select>
            </label>
            <label>Payment:</label> */}
            {hallbooking ? (
        <h5>
          {error
            ? error
            : "Booking successful "}
        </h5>
      ) : (
        <>

			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3 className="book">Fill the Form To Book Your Hall</h3>
          <form className="bookingform" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer Name:</label>
            <input
              type="text"
              name="customerName"
              placeholder="Enter Name"
              value={customer.customerName}
              id="NameInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={customer.email}
              id="EmailInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="Number"
              name="phoneNumber"
              placeholder="Enter Phone number"
              value={customer.phoneNumber}
              id="PhoneInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="govtidentityProof">Govt Identity Proof:</label>
            <input
              type="Number"
              name="govtidentityProof"
              placeholder="Enter ID Proof Number"
              value={customer.govtidentityProof}
              id="govtIdentityInput"
              onChange={handleCustomer}
              required
            />
            <label htmlFor="HallType">
              Select Hall Type:
              <select multiple={true} value={halls} onChange={handleHall}>
                <option value="62b71359d49f6f971fe021b2">
                  WEDDING HALL
                </option>
                <option value="62b73229d49f6f971fe021b3">
                  BANQUET HALL
                </option>
                <option value="62b73cd7d49f6f971fe021b6">
                  PARTY HALL
                </option>
                <option value="62b740bbd49f6f971fe021b7">
                  SEMINAR HALL
                </option>
              </select>
            </label>
            <label>Payment:</label>

					<button type="submit" className="btn-info-form" onClick={() => setShowItem(true)}>Pay Now</button>
          </form>
				</>
      
			)}
      </>)}
{/* 

           <button type="submit" className="btn-info-form">
              {" "}
              Submit
            </button>
          </form> */}
        {/* </> */}
      {/* )} */}
    </> 
  );
};

export default BookingForm;

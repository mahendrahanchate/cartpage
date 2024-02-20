import React, { useState } from 'react';
import './BuyNow.css'; // Import CSS file for styling
import { Link } from "react-router-dom";


function BuyNow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: ''
  });

  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the input field is mobile, allow only numbers and restrict to 10 digits
    if (name === "mobile") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      }
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleNext = () => {
    // Check if all fields are filled
    if (Object.values(formData).every(value => value !== '')) {
      setValid(true);
      // Proceed with next action here
      console.log("Form data is valid:", formData);
    } else {
      setValid(false);
    }
  };

  return (
    <div>
        <h1 style={{display: "flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        User Details To Order</h1>
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name" required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email" required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number" required
          pattern="[0-9]*" // Allow only numbers
          maxLength={10} // Set maximum length to 10 digits
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address" required
          rows={5} // Set the initial rows
          cols={30} // Set the initial columns
          maxLength={200} // Set the maximum characters allowed
          minLength={10} // Set the minimum characters required
        />
      </div>

      {valid ? null : <p className="invalid-msg">Please fill in all fields.</p>}
      
      <button style={{ width:"fit-Content" }} className="next-btn" onClick={handleNext}>
        <Link to="/placeorder" >Next </Link>
        </button>
    </div>
    </div>
  );
}

export default BuyNow;

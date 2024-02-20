// PlaceOrder
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function PlaceOrder() {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };
  const handleCardNumberChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, '').substring(0, 16); // Remove non-numeric characters and limit to 16 digits
    inputValue = inputValue.replace(/(.{4})/g, '$1 ').trim(); // Add space after every 4 characters

    setCardNumber(inputValue);
  };
  const [showCVV, setShowCVV] = useState(false);

  const handleCVVChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, '').substring(0, 3); // Remove non-numeric characters and limit to 3 digits
    setCVV(inputValue);
  };

  const toggleShowCVV = () => {
    setShowCVV(!showCVV);
  };
  

  return (
    <div>
        <h1 style={{display: "flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            Payment Details
        </h1>
    <form style={{display: "flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}} onSubmit={handleSubmit}>
            <div>
        <label style={{marginRight:"10px",marginBottom:"10px",display:"inline-block"}} htmlFor="card-number">Card Number:</label>
        <input style={{marginBottom:"5px", padding:"5px", width:"200px", border:"1px solid #ccc", borderRadius:"3px"}}
          type="text"
          id="card-number"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="19" // Account for the spaces between every 4 characters
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>

      <div>
        <label style={{marginRight:"10px",marginBottom:"10px",display:"inline-block"}} htmlFor="cvv">CVV:</label>
        <input style={{marginBottom:"5px", padding:"5px", width:"200px", border:"1px solid #ccc", borderRadius:"3px"}}
          type={showCVV ? 'text' : 'password'} // Toggle between text and password type to reveal/hide CVV
          id="cvv"
          value={cvv}
          onChange={handleCVVChange}
          maxLength="3"
          placeholder="123"
          required
        />
 <span style={{ border: "0.1px black", padding:"4px",margin:"4px", cursor: "pointer" , borderRadius:"10px"}} onClick={toggleShowCVV}>
        <FontAwesomeIcon icon={showCVV ? faEyeSlash : faEye} />
      </span>      </div>
      <div>
        <label style={{marginRight:"10px",marginBottom:"10px",display:"inline-block"}} htmlFor="cardholder-name">Cardholder Name:</label>
        <input style={{marginBottom:"5px", padding:"5px", width:"200px", border:"1px solid #ccc", borderRadius:"3px"}}
          type="text"
          id="cardholder-name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
      </div>
      <div>
        <label style={{marginRight:"10px",marginBottom:"10px",display:"inline-block"}} htmlFor="expiry-month">Expiry Date (MM/YYYY):</label>
        <input style={{marginBottom:"5px", padding:"5px", width:"200px", border:"1px solid #ccc", borderRadius:"3px"}}
          type="text"
          id="expiry-month"
          value={expiryMonth}
          onChange={(e) => setExpiryMonth(e.target.value)}
          placeholder="MM"
          maxLength="2"
          required
        />
        /
        <input style={{marginBottom:"5px", padding:"5px", width:"200px", border:"1px solid #ccc", borderRadius:"3px"}}
          type="text"
          id="expiry-year"
          value={expiryYear}
          onChange={(e) => setExpiryYear(e.target.value)}
          placeholder="YYYY"
          maxLength="4"
          required
        />
      </div>
      <button style={{ width:"fit-Content" }} type="submit">
       <Link to="/confirmorder">Confirm Order</Link> 
        </button>
    </form>
    </div>
  );
}

export default PlaceOrder;

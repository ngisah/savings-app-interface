import React from 'react';

const Mpesa = () => {
  return (
    <div>
      <h2>Lipa na Mpesa Payment</h2>
      <form>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" placeholder="Enter Amount" />
        </div>
        
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Mpesa;
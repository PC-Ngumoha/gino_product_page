import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './Donation.css';

export default function DownloadModal() {
  const [amount, setAmount] = useState('');
  // const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = [1500, 2000, 2500, 3000];

  const handleDonation = (e) => {
    e.preventDefault();
    // Handle donation logic here
    console.log('Donation amount:', amount);
  };

  return (
    <div className="donation-modal">
      <h2 className="donation-title">Please buy me a coffee !!!</h2>
      <p className="donation-desc">
        I'm a solo developer from Nigeria and your support would go a long way
      </p>

      <form className="donation-form" onSubmit={handleDonation}>
        <div className="donation-amounts">
          {predefinedAmounts.map((value) => (
            <button
              key={value}
              type="button"
              className={`donation-amount-btn${
                amount === value ? ' selected' : ''
              }`}
              onClick={() => setAmount(value)}
            >
              ₦{value}
            </button>
          ))}
        </div>

        {/* <div className="donation-custom">
          <label htmlFor="custom-amount">Custom Amount</label>
          <input
            id="custom-amount"
            type="number"
            placeholder="Enter amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
        </div> */}

        <div className="donation-submit">
          <Button type="submit" className="btn">
            Donate {`₦${amount}`}
          </Button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import billsCalc from '../utils/BillsCalc.js';
import MoneyDisplayCard from './MoneyDisplayCard.js';
import "./MoneyDisplay.css";

const MoneyDisplay = () => {
  const [value, setValue] = useState(0);
  const [calculatedBills, setCalculatedBills] = useState([]);

  const handleValueChange = (value) => {
    setValue(value);
  };

  const handleSubmit = () => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const bills = billsCalc(numericValue);
      setCalculatedBills(bills.filter(bill => bill.number > 0));
    } else {
      console.error('Invalid input: Not a number');
    }
  };

  return (
    <div className="money-display">
      <p className="instructions">
        Instructions: Please input any amount of money (up to 2 decimal places,
        17 digits) to see the amount of units in US currency with the least
        amount of change given.
      </p>
      <div className="input-container">
        <CurrencyInput
          className="currency-input"
          id="money-input"
          data-testid="money-input"
          name="money-input"
          placeholder="Enter amount"
          defaultValue={0}
          decimalsLimit={2}
          allowNegativeValue={false}
          onValueChange={handleValueChange}
          prefix="$"
          groupSeparator=","
          decimalSeparator="."
          maxLength={15}
        />
        <button className='submit-btn' id='submit-btn' data-testid='submit-btn' onClick={handleSubmit}>
            Submit
        </button>
      </div>
      <div className="money-display-cards" data-testid="money-display-cards">
        {calculatedBills.map((bill, index) => (
          <div className="money-container" data-testid="money-container">
            <MoneyDisplayCard key={index} type={bill.type} number={bill.number} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoneyDisplay;
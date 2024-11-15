import React, { useState } from 'react';
import billsCalc from '../utils/BillsCalc.js';
import MoneyDisplayCard from './MoneyDisplayCard.js';
import "./MoneyDisplay.css";
import BigNumber from 'bignumber.js';

const MoneyDisplay = () => {
  BigNumber.config({
    FORMAT: {
      prefix: '$',
      decimalSeparator: '.',
      groupSeparator: ',',
      groupSize: 3
    }
  });

  const [inputValue, setInputValue] = useState('');
  const [calculatedBills, setCalculatedBills] = useState([]);

  const handleValueChange = (e) => {
    var input = e.target.value;

    // Parse input to only be the numbers and decimal point
    input = input.split('$').join('').split(',').join('')

    // If user types in ".", make input "0."
    if(input === '.') {
      input = "0."
    }
    
    // Allow typing decimal point and up to two decimal places (gotten from internet)
    if (input === '' || /^\d*\.?\d{0,2}$/.test(input)) {
      setInputValue(input);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const bigNumberValue = new BigNumber(inputValue);
    
    // Fail safe in case user gets an invalid input in
    if (bigNumberValue.isNaN()) {
      console.error('Invalid input: Not a number');
      setCalculatedBills([]);
      return;
    }

    const bills = billsCalc(bigNumberValue);
    setCalculatedBills(bills.filter(bill => bill.number > 0));
  };

  // Format the input value only when it's not empty
  const formattedValue = inputValue ? 
    inputValue.charAt(inputValue.length - 1) === "." &&
    inputValue.split(".").length === 2 ?
      new BigNumber(inputValue).toFormat() + "." :
      new BigNumber(inputValue).toFormat()
    : '';

  return (
    <div className="money-display">
      <p className="instructions">
        Instructions: Please input any amount of money (up to 2 decimal places)
        to see the amount of units in US currency with the least amount of
        change given.
      </p>
      <div className="input-container">
        <input
          type="text"
          className="currency-input"
          id="money-input"
          data-testid="money-input"
          name="money-input"
          placeholder="Enter amount"
          value={formattedValue}
          onChange={handleValueChange}
          onKeyPress={handleKeyPress}
        />
        <button className='submit-btn' id='submit-btn' data-testid='submit-btn' onClick={handleSubmit}>
            Submit
        </button>
      </div>
      <div className="money-display-cards" data-testid="money-display-cards">
        {calculatedBills.map((bill, index) => (
          <div className="money-container" key={index} data-testid="money-container">
            <MoneyDisplayCard type={bill.type} number={bill.number} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoneyDisplay;
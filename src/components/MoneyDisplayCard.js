import React from 'react';
import hundredBill from '../assets/100bill.jpg';
import fiftyBill from '../assets/50bill.jpg';
import twentyBill from '../assets/20bill.jpg';
import tenBill from '../assets/10bill.jpg';
import fiveBill from '../assets/5bill.jpg';
import oneBill from '../assets/1bill.jpg';
import quarter from '../assets/quarter.jpg';
import dime from '../assets/dime.jpg';
import nickel from '../assets/nickel.jpg';
import penny from '../assets/penny.jpg';

const MoneyDisplayCard = ({ type, number }) => {
  const imageSource = {
    "$100 bill": hundredBill,
    "$50 bill": fiftyBill,
    "$20 bill": twentyBill,
    "$10 bill": tenBill,
    "$5 bill": fiveBill,
    "$1 bill": oneBill,
    "quarter": quarter,
    "dime": dime,
    "nickel": nickel,
    "penny": penny
  }

  /**
   * Computes string display of each bill, pluralizes if necessary
   */
  const moneyAmt = number > 1 ? 
    (type === "penny" ?
      `${number.toFormat().substring(1)} pennies` :
      `${number.toFormat().substring(1)} ${type}s`) :
    `${number.toFormat().substring(1)} ${type}`

  return (
    <div className="money-display-card" data-testid="money-display-card">
      <h2 className="money-amt" data-testid="money-amt">{moneyAmt}</h2>
      <img data-testid="money-img" src={imageSource[type]} alt={`${type}`}/>
    </div>
  );
};

export default MoneyDisplayCard;
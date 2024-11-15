import billsCalc from '../utils/BillsCalc.js';
import BigNumber from 'bignumber.js';

describe('billsCalc Function', () => {
  // Random dollar amount with multiple bills and coins showing/not showing
  test('calculates bills for $123.45', () => {
    const result = billsCalc(new BigNumber(123.45));
    expect(result).toEqual([
      {"type": "$100 bill", "number": new BigNumber(1)},
      {"type": "$50 bill", "number": new BigNumber(0)},
      {"type": "$20 bill", "number": new BigNumber(1)},
      {"type": "$10 bill", "number": new BigNumber(0)},
      {"type": "$5 bill", "number": new BigNumber(0)},
      {"type": "$1 bill", "number": new BigNumber(3)},
      {"type": "quarter", "number": new BigNumber(1)},
      {"type": "dime", "number": new BigNumber(2)},
      {"type": "nickel", "number": new BigNumber(0)},
      {"type": "penny", "number": new BigNumber(0)}
    ]);
  });

  // Zero bills
  test('calculates bills for $0.00', () => {
    const result = billsCalc(new BigNumber(0));
    expect(result).toEqual([
      {"type": "$100 bill", "number": new BigNumber(0)},
      {"type": "$50 bill", "number": new BigNumber(0)},
      {"type": "$20 bill", "number": new BigNumber(0)},
      {"type": "$10 bill", "number": new BigNumber(0)},
      {"type": "$5 bill", "number": new BigNumber(0)},
      {"type": "$1 bill", "number": new BigNumber(0)},
      {"type": "quarter", "number": new BigNumber(0)},
      {"type": "dime", "number": new BigNumber(0)},
      {"type": "nickel", "number": new BigNumber(0)},
      {"type": "penny", "number": new BigNumber(0)}
    ]);
  });

  // Very large amount
  test('calculates bills for a very large number', () => {
    const hundreds = new BigNumber('9876543210000000000000000000123456789');
    const result = billsCalc(new BigNumber('987654321000000000000000000012345678945.67'));
    expect(result).toEqual([
      {"type": "$100 bill", "number": hundreds},
      {"type": "$50 bill", "number": new BigNumber(0)},
      {"type": "$20 bill", "number": new BigNumber(2)},
      {"type": "$10 bill", "number": new BigNumber(0)},
      {"type": "$5 bill", "number": new BigNumber(1)},
      {"type": "$1 bill", "number": new BigNumber(0)},
      {"type": "quarter", "number": new BigNumber(2)},
      {"type": "dime", "number": new BigNumber(1)},
      {"type": "nickel", "number": new BigNumber(1)},
      {"type": "penny", "number": new BigNumber(2)}
    ]);
  });

  // Fractional amount
  test('calculates bills for $0.42', () => {
    const result = billsCalc(new BigNumber(0.42));
    expect(result).toEqual([
      {"type": "$100 bill", "number": new BigNumber(0)},
      {"type": "$50 bill", "number": new BigNumber(0)},
      {"type": "$20 bill", "number": new BigNumber(0)},
      {"type": "$10 bill", "number": new BigNumber(0)},
      {"type": "$5 bill", "number": new BigNumber(0)},
      {"type": "$1 bill", "number": new BigNumber(0)},
      {"type": "quarter", "number": new BigNumber(1)},
      {"type": "dime", "number": new BigNumber(1)},
      {"type": "nickel", "number": new BigNumber(1)},
      {"type": "penny", "number": new BigNumber(2)}
    ]);
  });

  // Amount with exactly 1 bill/coin type each
  test('calculates bills for $186.41', () => {
    const result = billsCalc(new BigNumber(186.41));
    expect(result).toEqual([
      {"type": "$100 bill", "number": new BigNumber(1)},
      {"type": "$50 bill", "number": new BigNumber(1)},
      {"type": "$20 bill", "number": new BigNumber(1)},
      {"type": "$10 bill", "number": new BigNumber(1)},
      {"type": "$5 bill", "number": new BigNumber(1)},
      {"type": "$1 bill", "number": new BigNumber(1)},
      {"type": "quarter", "number": new BigNumber(1)},
      {"type": "dime", "number": new BigNumber(1)},
      {"type": "nickel", "number": new BigNumber(1)},
      {"type": "penny", "number": new BigNumber(1)}
    ]);
  });
});

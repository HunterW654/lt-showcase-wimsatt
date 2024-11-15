/**
 * Calculates numbers of each bill needed minimally to reach the money amount.
 * @param {BigNumber} money
 * @returns {array} with map elements {type, number}
 */
function billsCalc(money) {
    const hundreds = money.dividedToIntegerBy(100);
    money = money.modulo(100);
    const fifties = money.dividedToIntegerBy(50);
    money = money.modulo(50);
    const twenties = money.dividedToIntegerBy(20);
    money = money.modulo(20);
    const tens = money.dividedToIntegerBy(10);
    money = money.modulo(10);
    const fives = money.dividedToIntegerBy(5);
    money = money.modulo(5);
    const ones = money.dividedToIntegerBy(1);

    money = money.modulo(1).multipliedBy(100);
    const quarters = money.dividedToIntegerBy(25);
    money = money.modulo(25);
    const dimes = money.dividedToIntegerBy(10);
    money = money.modulo(10);
    const nickels = money.dividedToIntegerBy(5);
    money = money.modulo(5);
    const pennies = money.dividedToIntegerBy(1);

    return [
        {"type": "$100 bill", "number": hundreds},
        {"type": "$50 bill", "number": fifties},
        {"type": "$20 bill", "number": twenties},
        {"type": "$10 bill", "number": tens},
        {"type": "$5 bill", "number": fives},
        {"type": "$1 bill", "number": ones},
        {"type": "quarter", "number": quarters},
        {"type": "dime", "number": dimes},
        {"type": "nickel", "number": nickels},
        {"type": "penny", "number": pennies}
    ]
}

export default billsCalc;
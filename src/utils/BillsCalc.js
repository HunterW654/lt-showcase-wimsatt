
/**
 * Calculates numbers of each bill needed minimally to reach the money amount.
 * @param {float} money
 * @returns {array} with map elements {type, number}
 */
function billsCalc(money) {
    var dollars = Math.floor(money)
    var cents = Math.round((money % 1) * 100)
    const hundreds = Math.floor(dollars / 100)
    dollars %= 100
    const fifties = Math.floor(dollars / 50)
    dollars %= 50
    const twenties = Math.floor(dollars / 20)
    dollars %= 20
    const tens = Math.floor(dollars / 10)
    dollars %= 10
    const fives = Math.floor(dollars / 5)
    dollars %= 5
    const ones = Math.floor(dollars)
    const quarters = Math.floor(cents / 25)
    cents %= 25
    const dimes = Math.floor(cents / 10)
    cents %= 10
    const nickels = Math.floor(cents / 5)
    cents %= 5
    const pennies = Math.floor(cents)

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
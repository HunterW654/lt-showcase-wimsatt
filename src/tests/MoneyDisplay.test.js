import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MoneyDisplay from '../components/MoneyDisplay';

describe('MoneyDisplay and MoneyDisplayCard Components', () => {
    // Input and Submit Buttons Displayed
    test('should display the currency input and submit button', () => {
        render(<MoneyDisplay />);
        expect(screen.getByTestId('money-input')).toBeInTheDocument();
        expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
    });

    // Bad data not displaying
    test('should not submit with bad data', () => {
        render(<MoneyDisplay />);
        const input = screen.getByTestId('money-input');
        const btn = screen.getByTestId('submit-btn');

        fireEvent.change(input, {target: {value: '0'}});
        fireEvent.click(btn);
        expect(screen.queryByTestId('money-display-card')).not.toBeInTheDocument();

        fireEvent.change(input, {target: {value: "-"}});
        fireEvent.click(btn);
        expect(screen.queryByTestId('money-display-card')).not.toBeInTheDocument();
    });

    // Good data displays
    test('should submit with good data and display all images', () => {
        render(<MoneyDisplay />);
        const input = screen.getByTestId('money-input');
        const btn = screen.getByTestId('submit-btn');
        
        fireEvent.change(input, {target: {value: '186.41'}});
        fireEvent.click(btn);
        
        const cards = screen.getAllByTestId('money-container');
        expect(cards.length).toBe(10);
        
        const altTypes = [
            "$100 bill",
            "$50 bill",
            "$20 bill",
            "$10 bill",
            "$5 bill",
            "$1 bill",
            "quarter",
            "dime",
            "nickel",
            "penny"
        ];
        
        cards.forEach((card, i) => {
            const altType = altTypes[i];
            const img = card.querySelector('img');
            expect(img).toHaveAttribute('alt', altType);
            
            const moneyAmt = card.querySelector('[data-testid="money-amt"]');
            expect(moneyAmt).toBeInTheDocument();
            
            expect(moneyAmt).toHaveTextContent("1 " + altType);
        });
    });
});

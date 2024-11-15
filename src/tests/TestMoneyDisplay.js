import { render, fireEvent } from '@testing-library/react';
import MoneyDisplay from '../components/MoneyDisplay';

it('should display the currency input and submit button', () => {
    render(<MoneyDisplay />);
    expect(screen.getByTestId('money-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
})

it('should not submit with bad data', () => {
    render(<MoneyDisplay />);
    const input = screen.getByTestId('money-input');
    const btn = screen.getByTestId('submit-btn');

    fireEvent.change(input, {target: {value: 0}});
    fireEvent.click(btn)
    expect(screen.getByTestId('money-display-card').not.toBeInTheDocument());

    fireEvent.change(input, {target: {value: "-"}});
    fireEvent.click(btn)
    expect(screen.getByTestId('money-display-card').not.toBeInTheDocument());
})

it('should submit with good data and display all images', () => {
    render(<MoneyDisplay />);
    const input = screen.getByTestId('money-input');
    const btn = screen.getByTestId('submit-btn');
})
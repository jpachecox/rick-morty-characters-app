import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';
import { useState } from 'react';

describe('Input component', () => {
    it('renders the label', () => {
        render(<Input label="Username" />);
        expect(screen.getByText('Username')).toBeInTheDocument();
    });

    it('renders helperText when provided', () => {
        render(<Input helperText="Helper info" />);
        expect(screen.getByText('Helper info')).toBeInTheDocument();
    });

    it('renders error message when provided', () => {
        render(<Input error="Required field" />);
        expect(screen.getByText('Required field')).toBeInTheDocument();
    });

    it('renders left and right icons', () => {
        const LeftIcon = <span data-testid="left-icon">L</span>;
        const RightIcon = <span data-testid="right-icon">R</span>;

        render(<Input leftIcon={LeftIcon} rightIcon={RightIcon} />);

        expect(screen.getByTestId('left-icon')).toBeInTheDocument();
        expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('updates focus and blur state correctly', async () => {
        const user = userEvent.setup();
        render(<Input label="Username" />);
        const input = screen.getByLabelText('Username');

        await user.click(input);
        expect(input).toHaveFocus();

        await user.tab();
        expect(input).not.toHaveFocus();
    });

    const ControlledInput = () => {
        const [value, setValue] = useState('');
        return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
    };

    it('renders the input value correctly', async () => {
        const user = userEvent.setup();
        render(<ControlledInput />);
        
        const input = screen.getByRole('textbox');
        await user.type(input, 'Hello');

        expect(input).toHaveValue('Hello');
    });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button component', () => {
    it('should render with children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should apply disabled when disabled is true', () => {
        render(<Button disabled>Disabled</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('should apply disabled when isLoading is true', () => {
        render(<Button isLoading>Loading...</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('should show loading spinner when isLoading is true', () => {
        render(<Button isLoading>Loading...</Button>);
        const spinner = screen.getByRole('button').querySelector('svg');
        expect(spinner).toBeInTheDocument();
    });

    it('should render leftIcon when provided and not loading', () => {
        render(<Button leftIcon={<span data-testid="left-icon" />}>With icon</Button>);
        expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('should not render leftIcon when loading', () => {
        render(<Button isLoading leftIcon={<span data-testid="left-icon" />}>With icon</Button>);
        expect(screen.queryByTestId('left-icon')).not.toBeInTheDocument();
    });

    it('should render rightIcon when provided and not loading', () => {
        render(<Button rightIcon={<span data-testid="right-icon" />}>With icon</Button>);
        expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('should not render rightIcon when loading', () => {
        render(<Button isLoading rightIcon={<span data-testid="right-icon" />}>With icon</Button>);
        expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        const button = screen.getByRole('button');
        await user.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should forward ref to button element', () => {
        const ref = { current: null as HTMLButtonElement | null };
        render(<Button ref={ref}>With ref</Button>);
        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
})
import { render, screen } from '@testing-library/react';
import Card, { CardHeader, CardBody, CardFooter } from './Card';

describe('Card component', () => {
    it('renders children', () => {
        render(<Card>Card Content</Card>);
        expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<Card className="custom-class">Card</Card>);
        expect(screen.getByText('Card')).toHaveClass('custom-class');
    });

    it('renders CardHeader with children', () => {
        render(<CardHeader>Header Content</CardHeader>);
        expect(screen.getByText('Header Content')).toBeInTheDocument();
    });

    it('renders CardBody with children', () => {
        render(<CardBody>Body Content</CardBody>);
        expect(screen.getByText('Body Content')).toBeInTheDocument();
    });

    it('renders CardFooter with children', () => {
        render(<CardFooter>Footer Content</CardFooter>);
        expect(screen.getByText('Footer Content')).toBeInTheDocument();
    });

    it('renders nested structure correctly', () => {
        render(
        <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
        </Card>
        );

        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Body')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });
});

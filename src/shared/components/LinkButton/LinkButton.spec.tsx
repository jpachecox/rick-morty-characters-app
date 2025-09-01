import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

jest.mock('next/link', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MockLink = ({ children, ...props }: any) => <a {...props}>{children}</a>;
  MockLink.displayName = 'NextLink';
  return MockLink;
});

describe('LinkButton component', () => {
    it('renders the children text', () => {
        render(<LinkButton href="/home">Go Home</LinkButton>);
        expect(screen.getByText('Go Home')).toBeInTheDocument();
    });

    it('applies classes based on variant and size', () => {
        render(
            <LinkButton href="/home" variant="secondary" size="lg">
                Click Me
            </LinkButton>
        );

        const link = screen.getByText('Click Me');

        expect(link.className).toMatch(/bg-/);
        expect(link.className).toMatch(/text-/);
    });

    it('supports fullWidth prop', () => {
        render(
        <LinkButton href="/home" fullWidth>
            Full Width
        </LinkButton>
        );

        const link = screen.getByText('Full Width');
        expect(link).toHaveClass('w-full');
    });

    it('renders correct href', () => {
        render(<LinkButton href="/about">About</LinkButton>);
        const link = screen.getByText('About');
        expect(link).toHaveAttribute('href', '/about');
    });
});

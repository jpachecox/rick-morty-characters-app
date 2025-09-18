import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading Component', () => {
  it('should render with default props', () => {
    render(<Heading>Test Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('should render with different levels', () => {
    render(<Heading level="h1">H1 Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('should apply correct CSS classes', () => {
    render(<Heading level="h2" color="primary" margin="lg">Test</Heading>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('text-2xl', 'font-semibold', 'text-gray-900', 'mb-6');
  });

  it('should accept additional props', () => {
    render(<Heading id="test-heading" data-testid="heading">Test</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveAttribute('id', 'test-heading');
  });

  it('should render all heading levels correctly', () => {
    const levels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
    
    levels.forEach((level, index) => {
      render(<Heading level={level}>Heading {level}</Heading>);
      const heading = screen.getByRole('heading', { level: index + 1 });
      expect(heading).toBeInTheDocument();
    });
  });
});

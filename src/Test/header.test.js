import { render, screen } from '@testing-library/react';
import Header from '../App/Components/Header';

test('Should render the Header component', () => {
  render(<Header />);
  const element = screen.getByTestId('header');
  expect(element).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../App/Components/Header';

test('Should render the Header component', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const element = screen.getByTestId('header');
  expect(element).toBeInTheDocument();
});
test('Should not render the Header component', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const element = screen.getByTestId('no-header');
  expect(element).toBeInTheDocument();
});

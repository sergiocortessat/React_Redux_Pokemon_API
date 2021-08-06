import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Home from '../App/Components/App';

it('renders img', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
});

test('renders textbox', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const textbox = screen.getByRole('textbox');
  expect(textbox).toBeInTheDocument();
});

test('renders button', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const button = screen.getAllByRole('button');
  expect(button).toBeInstanceOf(Array);
});

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from '../Redux/Reducers';
import Home from '../App/Components/App';

const store = createStore(Reducers);
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

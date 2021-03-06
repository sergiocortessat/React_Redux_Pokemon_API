import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Stats from '../App/Containers/PokemonStats';
import Reducers from '../Redux/Reducers';

const store = createStore(Reducers);

describe('Pokemon stats', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Stats />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

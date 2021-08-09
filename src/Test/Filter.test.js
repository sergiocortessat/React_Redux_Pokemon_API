import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Filter from '../App/Components/Filter';

describe('Filter', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Filter />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

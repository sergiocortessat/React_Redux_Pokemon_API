import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Button from '../App/Components/Button';

describe('Button to sort', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Button />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { test } from '@jest/globals';
import fetchPokemons from '../API/ApiFetch';

describe('Pokemon API fetch', () => {
  test('Receiving information from API to populate store', () => {
    fetchPokemons().then((result) => {
      expect(typeof result).toBe('JSON');
    }).catch((err) => err);
  });
  test('Receiving error from API', () => {
    fetchPokemons().then((result) => {
      expect(typeof result).toBe('CSV');
    }).catch((err) => err);
  });
  test('Negative test', () => {
    fetchPokemons().then((result) => {
      expect(typeof result).notToBe('CSV');
    });
  });
  test('Receiving information from API to populate store', () => {
    fetchPokemons().then((result) => {
      expect(typeof result).notToBe('JSON');
    }).catch((err) => err);
  });
});

const palindromo = require('../utils/palindromo');

describe('palindromo', () => {
    test.each`
      firstValue | expectedResult    
      ${'jar'}       | ${'raj'}
      ${'JAR'}       | ${'RAJ'}
      ${'HELLo'}     | ${'oLLEH'}
      `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });
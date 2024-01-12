const isUpperCase = require('../utils/esmayuscula');

describe('mayuscula', () => {
    test.each`
      firstValue | expectedResult    
      ${'jar'}       | ${false}
      ${'JAR'}       | ${true}
      ${'HELLo'}     | ${false}
      ${'HELLO'}     | ${true}
      ${'estO'}      | ${false}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });
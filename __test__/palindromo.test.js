const palindromo = require('../utils/palindromo');

test('conseguir palindromo de un texto', () => {

    expect(palindromo('roma')).toBe('amor');

})


test('conseguir palindromo de un texto', () => {

    expect(palindromo('123')).toBe('321');

})
const isUpperCase = require('../utils/esmayuscula');

test('comprobar frase mayusculas', () => {

    expect(isUpperCase('THE KING')).toBe(true);

})


test('comprobar frase mayusculas', () => {

    expect(isUpperCase('the king')).toBe(false);

})


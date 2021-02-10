const sim = require('./sim');

test('age de la retraite', () => {
  expect(sim(1967, 23)).toBe("65 ans et 6 mois");
  expect(sim(1953, 20)).toBe("61 ans et 3 mois");
  expect(sim(1952, 21)).toBe("vous pouvez déjà partir à la retraite");
  expect(sim(1997, 22)).toBe("65 ans");
});
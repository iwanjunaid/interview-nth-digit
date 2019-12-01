const nthDigit = require('./nthDigit');

describe('nth digit of integer', () => {
  test('Should return 0 for 0th position', () => {
    expect(nthDigit(0)).toEqual(0);
  });

  test('Should return 1 for 1st position', () => {
    expect(nthDigit(1)).toEqual(1);
  });

  test('Should return 9 for 9th position', () => {
    expect(nthDigit(9)).toEqual(9);
  });

  test('Should return 1 for 10th position', () => {
    expect(nthDigit(10)).toEqual(1);
  });

  test('Should return 0 for 11th position', () => {
    expect(nthDigit(11)).toEqual(0);
  });

  test('Should be executed under 1ms', () => {
    const start = process.hrtime();

    nthDigit(1000000000000);

    const end = process.hrtime(start);
    const totalTimeTaken = (end[0] * 1000) + (end[1] / 1000000);

    expect(totalTimeTaken).toBeLessThan(1);
  });
});

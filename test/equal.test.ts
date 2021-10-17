import isEqual from '@/equal';

describe('isEqual()', () => {
  test('1 and 1 is equal', () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  test('null and null is equal', () => {
    expect(isEqual(null, null)).toBe(true);
  });

  test('{ a: 1 } and { a: 1} is equal', () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
  });

  test('{ a: { b: 1 } } and { a: { c: 1 }} is not equal', () => {
    expect(isEqual({ a: { b: 1 } }, { a: { c: 1 } })).toBe(false);
  });
});

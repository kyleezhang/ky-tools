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
  test('{ a: 1 } and { b: 1} is not equal', () => {
    expect(isEqual({ a: 1 }, { b: 1 })).toBe(false);
  });
  test('{} and [] is not equal', () => {
    expect(isEqual({}, [])).toBe(false);
  });
  test('[1, 2, a] and [1, 2, a] is equal', () => {
    expect(isEqual([1, 2, 'a'], [1, 2, 'a'])).toBe(true);
  });
  test('{ a: 1, b: { c: 1 } } and { a: 1, b: { b: 1 }} is equal', () => {
    expect(isEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe(true);
  });
});

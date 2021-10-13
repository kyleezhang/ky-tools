import splitNumber from '@/number';

describe('splitNumber()', () => {
  test('常规数字千分位拆分', () => {
    expect(splitNumber(12345.18276)).toBe('12,345.182,76');
  });
  test('整数千分位拆分', () => {
    expect(splitNumber(1287464788)).toBe('1,287,464,788');
  });
  test('小数千分位拆分', () => {
    expect(splitNumber(0.2351341)).toBe('0.235,134,1');
  });
  test('非数字输入处理', () => {
    expect(splitNumber(undefined)).toBe('-');
  });
});

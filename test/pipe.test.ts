import pipe from '@/pipe';

describe('pipe', () => {
  const fn1 = jest.fn().mockReturnValue(1);
  const fn2 = jest.fn().mockReturnValue(2);
  const fn = pipe(fn1, fn2);
  fn('a');

  test('被封装函数从左到右依次被调用', () => {
    expect(fn1).toBeCalledTimes(1);
    expect(fn2).toBeCalledTimes(1);
  });

  test('前一个函数的返回值是后面函数的参数', () => {
    const result1 = fn1();
    expect(fn2).toHaveBeenCalledWith(result1);
  });

  test('第一个函数的入参是封装后函数的参数', () => {
    expect(fn1).toHaveBeenCalledWith('a');
  });

  test('封装函数的返回为最后一个函数的返回', () => {
    expect(fn('b')).toBe(2);
  });
});

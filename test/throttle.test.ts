import throttle from '@/throttle';

describe('throttle', () => {
  // 定义一个 Mock 函数
  const mockFn = jest.fn();

  // 封装为节流方法
  const fn = throttle(mockFn, 20);

  fn(1);
  fn(2);

  test('mock函数仅被调用一次', (done) => {
    setTimeout(() => {
      expect(mockFn).toBeCalledTimes(1);
      done();
    }, 50);
  });

  test('调用结果以第一次为准', (done) => {
    setTimeout(() => {
      const { calls } = mockFn.mock;
      console.log(calls);
      expect(calls[0][0]).toBe(1);
      done();
    });
  });
});

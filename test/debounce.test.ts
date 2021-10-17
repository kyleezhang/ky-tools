import debounce from '@/debounce';

describe('debounce', () => {
  const mockFn = jest.fn();

  const func = debounce(mockFn, 20);

  func(1);
  func(2);

  test('函数仅被调用一次', (done) => {
    setTimeout(() => {
      expect(mockFn).toBeCalledTimes(1);
      done();
    }, 50);
  });

  test('函数调用结果为最后一次的结果', (done) => {
    setTimeout(() => {
      const { calls } = mockFn.mock;
      expect(calls[0][0]).toBe(2);
      done();
    }, 50);
  });
});

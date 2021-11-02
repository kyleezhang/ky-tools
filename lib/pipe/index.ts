function pipe(...fns: Array<(...args: unknown[]) => unknown>) {
  return function f(...args: unknown[]): unknown {
    return fns.reduce((a, b) => [b.apply(this, a)], args)[0];
  };
}

export default pipe;

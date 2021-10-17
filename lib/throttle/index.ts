function throttle(fn: (...args) => unknown, ms: number): (...args) => unknown {
  let throttleTimer = null;
  return function f(...args) {
    if (!throttleTimer) {
      const res = fn.apply(this, args);
      throttleTimer = setTimeout(() => {
        throttleTimer = null;
      }, ms);
      return res;
    }
    return undefined;
  };
}

export default throttle;

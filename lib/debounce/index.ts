function debounce(fn: (...args) => unknown, ms: number): (...args) => unknown {
  let debounceTimer = null;
  return function f(...args) {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      fn.apply(this, args);
      debounceTimer = null;
    }, ms);
  };
}

export default debounce;

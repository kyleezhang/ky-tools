function isObject(obj: unknown): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export default function isEqual(a: unknown, b: unknown): boolean {
  if ((isObject(a) && isObject(b)) || (Array.isArray(a) && Array.isArray(b))) {
    return Object.keys(a).every((key) => {
      if (!b[key]) {
        return false;
      }
      return isEqual(a[key], b[key]);
    });
  }
  return a === b;
}

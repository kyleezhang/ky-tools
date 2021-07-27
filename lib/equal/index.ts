function handleObject(a: Record<number | string, unknown>, b: Record<number | string, unknown>): boolean {
  if (a === b) {
    return true;
  }
  if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
    return false;
  }
  const keys = Object.keys(a);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (!Object.prototype.hasOwnProperty.call(b, key)) {
      return false;
    }
    if (typeof a[key] === 'object' && typeof b[key] === 'object') {
      return handleObject(a[key] as Record<string| number, unknown>, b[key] as Record<string| number, unknown>);
    }
    if (a[key] === b[key]) {
      return true;
    }
    return false;
  }
  return true;
}

export default function isEqual(a: unknown, b: unknown): boolean {
  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b;
  }
  if (a === null || b === null) {
    return a === b;
  }
  return handleObject(a as Record<number | string, unknown>, b as Record<number | string, unknown>);
}

## equal

### Usage

> Determine whether two elements are equal

```ts
isEqual(a: any, b: any): boolean;
```

### Example

```js
isEqual(1, 1); // true
isEqual(null, null); // true
isEqual({ a: 1 }, { a: 1 }); // true
isEqual({ a: 1 }, { b: 1 }); // true
isEqual({}, []); // false
isEqual([1, 2, "a"], [1, 2, "a"]); // true
isEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }); // true
```

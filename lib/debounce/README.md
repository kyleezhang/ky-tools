## debounce

### Usage

> 返回函数频繁被调用时忽略中间操作，只响应最后一次操作

> When the return function is called frequently, the intermediate operation is ignored, and only the last operation is responded to

```ts
debounce(func: (...args) => unknown, ms: number): (...args) => unknown
```

### Example

```js
debounce((...args) => {
  // TODO
}, 1000);
```

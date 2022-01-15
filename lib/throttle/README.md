## throttle

### Usage

> 节流，返回函数频繁被调用时会隔指定毫秒再触发

```ts
throttle(func: (...args) => unknown, ms: number): (...args) => unknown
```

### Example

```js
throttle((...args) => {
  console.log("i have been throttled");
}, 1000);
```

## debounce

### Usage

> 防抖，返回函数频繁被调用时忽略中间操作，只响应最后一次操作

```ts
debounce(func: (...args) => unknown, ms: number): (...args) => unknown
```

### Example

```js
debounce((...args) => {
    // TODO
}, 1000)
```

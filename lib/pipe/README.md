## pipe

### Usage

> 流式函数封装工具

> a function process functions like streams

```ts
pipe(...fns: Array<(...args: unknown[]) => unknown>) => (..args: unknown[]) => unknown
```

### Example

```js
const fn1 = () => 1;
const fn2 = (x) => x * 2;
const fn = pipe(fn1, fn2);
fn(); // 2
```

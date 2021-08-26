## events

### Usage

> 事件发布订阅器，可以注册和发布事件

```ts
const events1 = new Events({ limit: 10 });
const events2 = new Events();
events1.on("test", (num: number) => {
  console.log(num + 3);
});
events1.emit("test");
```

### Events

| 名称 |                           参数                           |            解释            |
| ---- | :------------------------------------------------------: | :------------------------: |
| emit |        （name: string，...restProps: unknown[]）         |       触发的事件名称       |
| off  |                     （name: string）                     | 清空对应事件的回调函数列表 |
| on   | （name: string, callback: (...args: unknown[]) => void） |     注册事件的回调函数     |

### Example

```js
const events = new Events();
let a = 0;
events.on("test", () => {
  a += 1;
});
events.emit("test");
console.log(1); // 1
```

## splitNumber

### Usage

> 数字拆分千分位

```ts
splitNumber(num: number): string
```

### Example

```js
splitNumber(12345.18276) // '12,345.182,76'
splitNumber(1287464788)) // '1,287,464,788'
splitNumber(0.2351341)) // '0.235,134,1'
splitNumber(null) // '-'
splitNumber(undefined) // '-'
```

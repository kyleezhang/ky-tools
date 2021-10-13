function splitNumber(num: unknown): string {
  if (typeof num !== 'number') {
    return '-';
  }
  const [integer, float] = String(num).split('.');

  // 整数部分处理
  const result1 = integer.split('').reverse().reduceRight((pre, cur, index) => {
    if ((index + 1) % 3 === 0) {
      return `${pre},${cur}`;
    }
    return pre + cur;
  }, '').replace(/^,/, '');

  if (!float) {
    return result1;
  }

  // 小数部分处理
  const result2 = float.split('').reduce((pre, cur, index) => {
    if (index % 3 === 0) {
      return `${pre},${cur}`;
    }
    return pre + cur;
  }, '').replace(/^,/, '');

  return `${result1}.${result2}`;
}

export default splitNumber;

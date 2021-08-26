import { Events } from '@/event';

const events1 = new Events();
const events2 = new Events({ limit: 2 });

describe('EventEmitter', () => {
  test('事件正常注册监听', () => {
    let a = 0;
    events1.on('test', () => {
      a = 1;
    });
    events1.emit('test');
    expect(a).toBe(1);
  });
  test('注册事件可以被清空', () => {
    let a = 0;
    events1.on('test', () => {
      a += 1;
    });
    events1.emit('test');
    events1.off('test');
    events1.emit('test');
    expect(a).toBe(1);
  });
  test('可注册多个事件', () => {
    let a = 0;
    events1.on('test', () => {
      a += 1;
    });
    events1.on('test', () => {
      a += 1;
    });
    events1.emit('test');
    expect(a).toBe(2);
  });
  test('注册参数直接抛出异常', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => { events1.on('test'); }).toThrow(Error);
  });
  test('事件数超出限制会抛出异常', () => {
    events2.on('test', () => 1);
    events2.on('test', () => 2);
    expect(() => { events2.on('test', () => 3); }).toThrow(Error);
  });
});

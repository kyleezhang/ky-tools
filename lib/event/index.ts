export interface EventEmitterOptions {
    limit?: number;
}

export interface EventEmitter {
  on: (name: string, callback: (...restProps: unknown[]) => void) => void;
  emit: (name: string, ...restProps: unknown[]) => void;
  off: (name: string) => void;
}

export class Events implements EventEmitter {
  protected limit: number;

  protected events: Record<string, unknown[]>;

  constructor(options?: EventEmitterOptions) {
    this.limit = options?.limit;
    this.events = {};
  }

  on(name: string, callback: (...restProps: unknown[]) => void): void {
    if (typeof callback !== 'function') {
      throw new Error('the callback must be a function');
    }
    if (this.events[name]) {
      if (this.limit > 0 && this.events[name].length >= this.limit) {
        throw new Error('event count has overlimitted');
      }
      this.events[name].push(callback);
      return;
    }
    this.events[name] = [callback];
  }

  emit(name: string, ...restProps: unknown[]) :void {
    if (Object.keys(this.events).includes(name)) {
      const eventList = this.events[name];
      eventList.forEach((callback: (...props: unknown[]) => void) => {
        callback(...restProps);
      });
    }
  }

  off(name: string): void {
    if (Object.keys(this.events).includes(name)) {
      this.events[name] = [];
    }
  }
}

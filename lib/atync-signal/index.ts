interface DeferredInterface {
    promise?: Promise<unknown>
    resolve?: (...args) => void
    reject?: (...args) => void
}

function defer(): DeferredInterface {
  const deferred: DeferredInterface = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}

const pristate = Symbol('state');
const pricheckers = Symbol('checkers');

export default class AsyncSignal {
  constructor(initalState: unknown) {
    this[pristate] = initalState;
    this[pricheckers] = new Map();
  }

  get state(): unknown {
    return this[pristate];
  }

  set state(value: unknown) {
    [...this[pricheckers]].forEach(([promise, { type, deferred, state }]) => {
      if ((type === 'watch' && value !== state) || (type === 'until' && value === state)) {
        this[pricheckers].delete(promise);
        deferred.resolve();
      }
      this[pristate] = value;
    });
  }

  while(state: unknown): Promise<unknown> {
    const deferred = defer();
    if (state !== this[pristate]) {
      deferred.resolve(this[pristate]);
    } else {
      this[pricheckers].set(deferred.promise, { type: 'watch', deferred, state });
    }
    return deferred.promise;
  }

  until(state: unknown): Promise<unknown> {
    const deferred = defer();
    if (state === this[pristate]) {
      deferred.resolve(this[pristate]);
    } else {
      this[pricheckers].set(deferred.promise, { type: 'until', deferred, state });
    }
    return deferred.promise;
  }

  delete(promise: Promise<unknown>): void {
    this[pricheckers].delete(promise);
  }

  deleteAll(): void {
    this[pricheckers].clear();
  }
}

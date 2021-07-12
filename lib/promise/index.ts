export default function mypromise() :void {
  this.value = null;
  this.reason = null;
  this.fulfilledFunc = [];
  this.rejectedFunc = [];
}
export interface P {
    a: string,
    b: string
}

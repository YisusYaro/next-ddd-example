export class Forbidden extends Error {
  constructor(message: any) {
    super(message);
    Object.setPrototypeOf(this, Forbidden.prototype);
  }
}

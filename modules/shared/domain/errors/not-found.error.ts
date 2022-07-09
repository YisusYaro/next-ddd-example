export class NotFound extends Error {
  constructor(message: any) {
    super(message);
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}

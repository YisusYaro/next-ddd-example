export class BadRequest extends Error {
  constructor(message: any) {
    super(message);
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}

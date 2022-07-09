export class Unauthorized extends Error {
  constructor(message: any) {
    super(message);
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}

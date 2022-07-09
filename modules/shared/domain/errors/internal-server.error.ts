export class InternalServer extends Error {
  constructor(message: any) {
    super(message);
    Object.setPrototypeOf(this, InternalServer.prototype);
  }
}

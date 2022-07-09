import { Command } from "../../../shared/application/command";

class Properties {
  readonly id: string;
  readonly name: string;
}

export class CreateResourceCommand extends Properties implements Command {
  constructor(properties: Properties) {
    super();
    Object.assign(this, properties);
  }
}

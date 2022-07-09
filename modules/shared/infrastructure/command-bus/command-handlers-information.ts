import { injectable, Container } from 'inversify';
import { Command } from '../../application/command';
import { CommandHandler } from '../../application/commands/command.handler';
import { App } from '../dependency-injection/app';

export interface CommandHandlersInformation {
  getCommandHandlersMap(): Map<Command, symbol>;
  search(command: Command): CommandHandler<Command>;
}

@injectable()
export class CommandHandlersInformationImpl
  implements CommandHandlersInformation
{
  private commandHandlersMap: Map<Command, symbol>;
  private container: Container;

  constructor() {
    this.container = App.getInstance().getContainer();
    this.commandHandlersMap = new Map();
  }

  public getCommandHandlersMap() {
    return this.commandHandlersMap;
  }

  public search(command: Command): CommandHandler<Command> {
    const handler = this.commandHandlersMap.get(command.constructor);
    if (!handler)
      throw new Error(`Command not registered ${command.constructor}`);
    const commandHandler = this.container.get<CommandHandler<Command>>(handler);
    return commandHandler;
  }
}

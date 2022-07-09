import { inject, injectable } from 'inversify';
import { Command } from '../../application/command';
import { CommandHandlersInformation } from './command-handlers-information';
import { TYPES } from '../dependency-injection/types';

export interface CommandBus {
  execute(command: Command): Promise<void>;
}

@injectable()
export class CommandBusImpl implements CommandBus {
  constructor(
    @inject(TYPES.CommandHandlersInformation)
    private commandHandlersInformation: CommandHandlersInformation,
  ) {}

  async execute(command: Command): Promise<void> {
    const handler = this.commandHandlersInformation.search(command);
    return await handler.handle(command);
  }
}

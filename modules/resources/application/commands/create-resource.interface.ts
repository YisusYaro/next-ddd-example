import { CommandHandler } from '../../../shared/application/commands/command.handler';
import { CreateResourceCommand } from './create-resource.command';

export interface CreateResourceHandler
  extends CommandHandler<CreateResourceCommand> {
  handle(command: CreateResourceCommand): Promise<void>;
}

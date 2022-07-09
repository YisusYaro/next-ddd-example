import { getCommandHandlersMap } from '../../../shared/infrastructure/dependency-injection/register-commands';
import { CreateResourceCommand } from '../../application/commands/create-resource.command';
import { TYPES } from './types';

export const registerResourcesCommands = (): void => {

  const commandHandlersMap = getCommandHandlersMap();

  commandHandlersMap.set(CreateResourceCommand, TYPES.CreateResourceHandler);
};

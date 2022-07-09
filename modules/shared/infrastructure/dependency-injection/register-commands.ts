import { TYPES } from './types';
import { App } from './app';
import { CommandHandlersInformation } from '../command-bus/command-handlers-information';

export const getCommandHandlersMap = () => {
  const commandHandlersInformation: CommandHandlersInformation =
    App.getInstance().getContainer().get(TYPES.CommandHandlersInformation);

  return commandHandlersInformation.getCommandHandlersMap();
};

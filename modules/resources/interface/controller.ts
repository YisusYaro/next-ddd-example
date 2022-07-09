import { CommandBus } from "../../shared/infrastructure/command-bus/command-bus";
import { App } from "../../shared/infrastructure/dependency-injection/app";
import { TYPES as SHARED_TYPES } from "../../shared/infrastructure/dependency-injection/types";
import { CreateResourceCommand } from "../application/commands/create-resource.command";

const commandBus = App.getInstance()
  .getContainer()
  .get<CommandBus>(SHARED_TYPES.CommandBus);

export const createResource = async (form: any) => {
  const command = new CreateResourceCommand(form);
  await commandBus.execute(command);
};

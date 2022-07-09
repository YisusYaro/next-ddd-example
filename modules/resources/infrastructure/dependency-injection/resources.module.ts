import { Container } from "inversify";
import { CreateResourceHandlerImpl } from "../../application/commands/create-resource.handler";
import { CreateResourceHandler } from "../../application/commands/create-resource.interface";
import { ResourceFactory, ResourceFactoryImpl } from "../../domain/factory";
import { TYPES } from "./types";
import { registerResourcesCommands } from "./register-commands";
import { ResourceHttpService, ResourceHttpServiceImpl } from "../http-service/resource-http-service";

const setDomain = (container: Container): void => {
  container
    .bind<ResourceFactory>(TYPES.ResourceFactory)
    .to(ResourceFactoryImpl);
};

const setCommandsHandlers = (container: Container): void => {
  container
    .bind<CreateResourceHandler>(TYPES.CreateResourceHandler)
    .to(CreateResourceHandlerImpl);
};

// const setQueryHandlers = (container: Container): void => {
//   container
//     .bind<GetResourceHandler>(TYPES.GetResourceHandler)
//     .to(GetResourceHandlerImpl);
// };

const setApplication = (container: Container): void => {
  setCommandsHandlers(container);
  registerResourcesCommands();
  // setQueryHandlers(container);
  // registerResourcesQueries();
};

const setInfrastructure = (container: Container): void => {
  container
    .bind<ResourceHttpService>(TYPES.ResourceHttpService)
    .to(ResourceHttpServiceImpl);
};

export const setResourcesModule = (container: Container): void => {
  setDomain(container);
  setApplication(container);
  setInfrastructure(container);
};

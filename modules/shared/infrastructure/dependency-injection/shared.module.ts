import { Container } from "inversify";
import { CommandBus, CommandBusImpl } from "../command-bus/command-bus";
import {
  CommandHandlersInformation,
  CommandHandlersInformationImpl,
} from "../command-bus/command-handlers-information";
import { EventBus, EventBusImpl } from "../event-bus/event-bus";
import { IdService, IdServiceImpl } from "../id-service/id-service";
import { QueryBus, QueryBusImpl } from "../query-bus/query-bus";
import {
  QueryHandlersInformation,
  QueryHandlersInformationImpl,
} from "../query-bus/query-handlers-information";
import { TYPES } from "./types";

const setInfrastructure = (container: Container): void => {
  container.bind<CommandBus>(TYPES.CommandBus).to(CommandBusImpl);

  container.bind<QueryBus>(TYPES.QueryBus).to(QueryBusImpl);

  container.bind<EventBus>(TYPES.EventBus).to(EventBusImpl);

  container
    .bind<CommandHandlersInformation>(TYPES.CommandHandlersInformation)
    .to(CommandHandlersInformationImpl)
    .inSingletonScope();

  container
    .bind<QueryHandlersInformation>(TYPES.QueryHandlersInformation)
    .to(QueryHandlersInformationImpl)
    .inSingletonScope();

  container
    .bind<IdService>(TYPES.IdService)
    .to(IdServiceImpl)
};

export function setSharedModule(container: Container): void {
  setInfrastructure(container);
}

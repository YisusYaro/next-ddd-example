import { TYPES } from './types';
import { App } from './app';
import { QueryHandlersInformation } from '../query-bus/query-handlers-information';

export const getQueryHandlersMap = () => {
  const queryHandlersInformation: QueryHandlersInformation = App.getInstance()
    .getContainer()
    .get(TYPES.QueryHandlersInformation);

  return queryHandlersInformation.getQueryHandlersMap();
};

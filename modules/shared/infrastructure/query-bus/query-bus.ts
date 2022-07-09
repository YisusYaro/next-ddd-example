import { inject, injectable } from 'inversify';
import { Query } from '../../application/query';
import { QueryHandlersInformation } from './query-handlers-information';
import { TYPES } from '../dependency-injection/types';

export interface QueryBus {
  execute(query: Query): Promise<any>;
}

@injectable()
export class QueryBusImpl implements QueryBus {
  constructor(
    @inject(TYPES.QueryHandlersInformation)
    private queryHandlersInformation: QueryHandlersInformation,
  ) {}

  async execute(query: Query): Promise<any> {
    const handler = this.queryHandlersInformation.search(query);
    return await handler.handle(query);
  }
}

import { Container, injectable } from 'inversify';
import { QueryHandler } from '../../application/queries/query.handler';
import { App } from '../dependency-injection/app';
import { Query } from '../../application/query';
import { Result } from '../../application/result';

export interface QueryHandlersInformation {
  getQueryHandlersMap(): Map<Query, symbol>;
  search(query: Query): QueryHandler<Query, Result>;
}

@injectable()
export class QueryHandlersInformationImpl implements QueryHandlersInformation {
  private container: Container;
  private queryHandlersMap: Map<Query, symbol>;

  constructor() {
    this.container = App.getInstance().getContainer();
    this.queryHandlersMap = new Map();
  }

  public getQueryHandlersMap() {
    return this.queryHandlersMap;
  }

  public search(query: Query): QueryHandler<Query, Result> {
    const handler = this.queryHandlersMap.get(query.constructor);
    if (!handler) throw new Error('Query not registered');
    const queryHandler =
      this.container.get<QueryHandler<Query, Result>>(handler);
    return queryHandler;
  }
}


import { Query } from '../query';
import { Result } from '../result';

export interface QueryHandler<Q extends Query, R extends Result> {
  handle(query: Q): Promise<R>;
}

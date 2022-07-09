import { Event } from './event';

export interface EventHandler<E extends Event> {
  handle(event: E): Promise<any>;
}

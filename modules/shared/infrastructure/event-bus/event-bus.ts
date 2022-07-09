import { injectable } from 'inversify';
import { Event } from '../../domain/events/event';

export interface EventBus {
  publish(event: Event): Promise<void>;
}

@injectable()
export class EventBusImpl implements EventBus {
  async publish(event: Event): Promise<void> {
    console.log(event);
  }
}

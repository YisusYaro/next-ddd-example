import { Event } from './events/event';
import { App } from '../infrastructure/dependency-injection/app';
import { EventBus } from '../infrastructure/event-bus/event-bus';
import { TYPES as SHARED_TYPES } from '../infrastructure/dependency-injection/types';

export abstract class AggregateRoot {
  protected eventBus: EventBus;
  protected events: Event[] = [];

  constructor() {
    this.eventBus = App.getInstance()
      .getContainer()
      .get<EventBus>(SHARED_TYPES.EventBus);
  }

  record(event: Event): void {
    this.events.push(event);
  }

  async commit() {
    await Promise.all(
      this.events.map(async (event) => {
        await this.eventBus.publish(event);
      }),
    );
    this.events = [];
  }

  abstract toProperties(): any;
}

import { ulid } from 'ulid';

export abstract class Event {
  static EVENT_NAME: string;
  readonly aggregateId: string;
  readonly eventId: string;
  readonly occurredOn: Date;
  readonly eventName: string;
  readonly queueUrl?: string;

  constructor(
    eventName: string,
    aggregateId: string,
    eventId?: string,
    occurredOn?: Date,
  ) {
    this.aggregateId = aggregateId;
    this.eventId = eventId || ulid();
    this.occurredOn = occurredOn || new Date();
    this.eventName = eventName;
  }

  abstract toProperties(): unknown;
}

const INFRASTRUCTURE = {
  CommandBus: Symbol.for('CommandBus'),
  QueryBus: Symbol.for('QueryBus'),
  EventBus: Symbol.for('EventBus'),
  CommandHandlersInformation: Symbol.for('CommandHandlersInformation'),
  QueryHandlersInformation: Symbol.for('QueryHandlersInformation'),
  EventHandlersInformation: Symbol.for('EventHandlersInformation'),
  IdService: Symbol.for('IdService'),
};

export const TYPES = {
  ...INFRASTRUCTURE,
};

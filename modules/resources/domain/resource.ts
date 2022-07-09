import { AggregateRoot } from "../../shared/domain/aggregate-root";

export type ResourceEssentialProperties = Required<{
  readonly id: string;
  readonly name: string;
}>;

export type ResourceOptionalProperties = Partial<{
  readonly status: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}>;

export type ResourceProperties = ResourceEssentialProperties &
  Required<ResourceOptionalProperties>;

export interface Resource {
  toProperties(): ResourceProperties;
}

export class ResourceImplement implements Resource {
  private readonly id: string;
  private name: string;
  private status: string;
  private readonly createdAt: Date;
  private updatedAt: Date;

  constructor(
    properties: ResourceEssentialProperties & ResourceOptionalProperties
  ) {
    Object.assign(this, properties);
  }

  toProperties(): ResourceProperties {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

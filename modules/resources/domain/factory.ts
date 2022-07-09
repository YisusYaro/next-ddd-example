import { injectable } from "inversify";
import { Resource, ResourceImplement, ResourceProperties } from "./resource";

export interface ResourceFactory {
  create(properties: { id: string; name: string }): Resource;
  reconstitute(properties: ResourceProperties): Resource;
}

@injectable()
export class ResourceFactoryImpl implements ResourceFactory {
  create(properties: { id: string; name: string }): Resource {
    return new ResourceImplement({ ...properties });
  }

  reconstitute(properties: ResourceProperties): Resource {
    return new ResourceImplement(properties);
  }
}

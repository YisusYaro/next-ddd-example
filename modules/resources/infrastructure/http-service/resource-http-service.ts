import { injectable } from "inversify";
import { Resource } from "../../domain/resource";
import { HttpService } from "../../../shared/infrastructure/http-service/http-service";

export interface ResourceHttpService {
  create(resource: Resource): Promise<void>;
}

@injectable()
export class ResourceHttpServiceImpl
  extends HttpService
  implements ResourceHttpService
{
  async create(resource: Resource): Promise<void> {
    const properties = resource.toProperties();
    this.post("http://localhost/resources", {
      id: properties.id,
      name: properties.name,
    });
  }
}

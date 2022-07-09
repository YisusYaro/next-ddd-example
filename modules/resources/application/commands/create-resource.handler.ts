import { inject, injectable } from "inversify";
import { CreateResourceHandler } from "./create-resource.interface";
import { CreateResourceCommand } from "./create-resource.command";
import { ResourceFactory } from "../../domain/factory";
import { TYPES } from "../../infrastructure/dependency-injection/types";
import { ResourceHttpService } from "../../infrastructure/http-service/resource-http-service";
import { TYPES as SHARED_TYPES } from "../../../shared/infrastructure/dependency-injection/types";
import { IdService } from "../../../shared/infrastructure/id-service/id-service";

@injectable()
export class CreateResourceHandlerImpl implements CreateResourceHandler {
  constructor(
    @inject(TYPES.ResourceFactory)
    private resourceFactory: ResourceFactory,
    @inject(TYPES.ResourceHttpService)
    private resourceHttpService: ResourceHttpService,
    @inject(SHARED_TYPES.IdService)
    private idService: IdService
  ) {}

  async handle(command: CreateResourceCommand): Promise<void> {
    const resource = this.resourceFactory.create({
      id: this.idService.generate(),
      name: command.name,
    });

    this.resourceHttpService.create(resource);
  }
}

import { injectable } from "inversify";
import { ulid } from "ulid";

export interface IdService {
  generate(): string;
}

@injectable()
export class IdServiceImpl implements IdService {
  generate(): string {
    return ulid()
  }
}

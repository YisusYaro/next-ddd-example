import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  PutCommandInput,
  PutCommand,
  GetCommandInput,
  GetCommand,
  QueryCommandInput,
  QueryCommand,
  ScanCommandInput,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';
import { injectable } from 'inversify';

@injectable()
export abstract class DynamoRepository {
  private client: DynamoDBDocumentClient;

  constructor() {
    this.client = DynamoDBDocumentClient.from(
      new DynamoDBClient({ region: process.env.AWS_DEFAULT_REGION }),
      {
        marshallOptions: {
          convertEmptyValues: false,
          removeUndefinedValues: true,
        },
      },
    );
  }

  protected async put(params: PutCommandInput) {
    await this.client.send(new PutCommand(params));
  }

  protected async get(params: GetCommandInput) {
    return await this.client.send(new GetCommand(params));
  }

  protected async query(params: QueryCommandInput) {
    return await this.client.send(new QueryCommand(params));
  }

  protected async scan(params: ScanCommandInput): Promise<any> {
    let scanResults;
    const results: any = [];
    do {
      scanResults = await this.client.send(new ScanCommand(params));
      scanResults.Items?.forEach((item: any) => {
        results?.push(item);
      });
    } while (typeof scanResults.LastEvaluatedKey !== 'undefined');
    return results;
  }

  protected getFilterExpressionByFilters(
    filters: {
      value: any;
      operator: string;
      field: string;
    }[],
  ) {
    return filters.reduce(
      (
        expression: string,
        filter: {
          value: any;
          operator: string;
          field: string;
        },
        index: number,
      ) => {
        return index < filters.length - 1
          ? expression +
              `${filter.field} ${filter.operator} :${filter.field
                .split('.')
                .slice(-1)} and `
          : expression +
              `${filter.field} ${filter.operator} :${filter.field
                .split('.')
                .slice(-1)}`;
      },
      '',
    );
  }

  protected getExpressionAttributeValuesByFilters(
    filters: {
      value: any;
      operator: string;
      field: string;
    }[],
  ) {
    return filters.reduce(
      (
        values,
        filter: {
          value: any;
          operator: string;
          field: string;
        },
      ) => {
        const expressionAttributeValue: any = {};
        expressionAttributeValue[`:${filter.field.split('.').slice(-1)}`] =
          filter.value;
        return Object.assign(values, expressionAttributeValue);
      },
      {},
    );
  }
}

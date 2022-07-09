import { injectable } from "inversify";

@injectable()
export abstract class HttpService {
  async post(url: string, body: unknown): Promise<void> {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    // await fetch(url, settings);
    console.log(url, settings);
  }
}

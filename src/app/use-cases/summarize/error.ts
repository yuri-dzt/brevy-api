export class SummarizeError extends Error {
  constructor(message?: string) {
    super("Error on summarize: " + message);
    this.name = "SummarizeError";
  }
}

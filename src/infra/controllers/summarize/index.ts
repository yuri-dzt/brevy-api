import { SummarizeDto } from "../../../app/use-cases/summarize/dto";
import { SummarizeError } from "../../../app/use-cases/summarize/error";
import { SummarizeTextUseCase } from "../../../app/use-cases/summarize";
import { IControllerResponse } from "../../../contracts/controllers/controller";

export class SummarizeTextController {
  constructor(private readonly useCase: SummarizeTextUseCase) { }

  async handle(props: SummarizeDto): Promise<IControllerResponse> {
    const result = await this.useCase.execute(props);

    if (result instanceof SummarizeError) {
      return {
        status_code: 400,
        body: {
          message: result.message,
        },
      };
    }

    return {
      status_code: 201,
      body: result,
    };
  }
}

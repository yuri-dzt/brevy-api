import { OpenAIAgent } from "../../services/agent";
import { SummarizeTextController } from "../../controllers/summarize";
import { SummarizeTextUseCase } from "../../../app/use-cases/summarize";


export const SummarizeTextControllerFactory = () => {
  const agentService = new OpenAIAgent();
  const useCase = new SummarizeTextUseCase(
    agentService
  );
  return new SummarizeTextController(useCase);
};

import { SummarizeError } from "./error";
import { SummarizeDto, SummarizeResponse } from "./dto";
import { IAgentService } from "../../../contracts/services/agent";

export class SummarizeTextUseCase {
  constructor(
    private readonly agentService: IAgentService
  ) { }

  async execute(props: SummarizeDto): Promise<SummarizeResponse | SummarizeError> {
    try {
      const generateChatTitleSystemPrompt = {
        role: "system" as "system" | "user" | "assistant",
        content: `
          Você é responsável por resumir os textos enviados pelo usuário.
          Regras:

          NUNCA responda à pergunta do usuário
          A resposta deve sempre ser um resumo mas que de pra entender toda a mensagem
          Sem explicações ou texto adicional
          Sem prefixos como "Resumo:"
          Em português brasileiro
          Relacionado ao tema principal da mensagem
          Responda SOMENTE com o resumo gerado.
          NUNCA fuja do tema, nunca responda com um resumo diferente do tema da mensagem.
      `,
      };

      const response = await this.agentService.generateResponse({
        message: props.text,
        history: [generateChatTitleSystemPrompt],
      });

      if (response instanceof Error) {
        return new SummarizeError(response.message);
      }

      return {
        summary: response
      }

    } catch {
      return new SummarizeError("Error occurred while summarizing text.");
    }
  }
}

export type AgentMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type GenerateResponseProps = {
  message: string;
  history: AgentMessage[];
};

export interface IAgentService {
  generateResponse(props: GenerateResponseProps): Promise<string | Error>;
}

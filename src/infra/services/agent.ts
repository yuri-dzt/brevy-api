
import "dotenv/config";
import OpenAI from "openai";

import { GenerateResponseProps, IAgentService } from "../../contracts/services/agent";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenAIAgent implements IAgentService {
  async generateResponse(
    props: GenerateResponseProps
  ): Promise<string | Error> {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [...props.history, { role: "user", content: props.message }],
    });

    if (!response) {
      return new Error("Error generating response");
    }
    return response.choices[0].message.content || "";
  }
}

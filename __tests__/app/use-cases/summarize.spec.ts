import { describe, it, expect, vi, beforeEach } from "vitest";
import { IAgentService } from '../../../src/contracts/services/agent'
import { SummarizeTextUseCase } from '../../../src/app/use-cases/summarize'
import { SummarizeError } from "../../../src/app/use-cases/summarize/error";

const mockAgentService: IAgentService = {
  generateResponse: vi.fn(),
};

describe("SummarizeTextUseCase", () => {
  let useCase: SummarizeTextUseCase;

  beforeEach(() => {
    useCase = new SummarizeTextUseCase(mockAgentService);
    vi.clearAllMocks();
  });

  it("should be able to return a summary", async () => {
    const text = "This text is very long and needs to be summarized";
    const summary = "Summary of the text";
    mockAgentService.generateResponse = vi.fn().mockResolvedValue(summary);

    const result = await useCase.execute({ text });

    expect(result).toEqual({ summary });
    expect(mockAgentService.generateResponse).toHaveBeenCalledWith({
      message: text,
      history: expect.any(Array),
    });
  });

  it("should not be able to return a summary if agentService returns an error", async () => {
    const text = "This text is very long and needs to be summarized";
    const error = new Error("Service failed");
    mockAgentService.generateResponse = vi.fn().mockResolvedValue(error);

    const result = await useCase.execute({ text });

    expect(result).toBeInstanceOf(SummarizeError);
    expect((result as SummarizeError).message).toBe("Error on summarize: Service failed");
  });

  it("should not be able to return a summary if agentService throws an error", async () => {
    const text = "This text is very long and needs to be summarized";
    mockAgentService.generateResponse = vi.fn().mockRejectedValue(new Error("Boom"));

    const result = await useCase.execute({ text });

    expect(result).toBeInstanceOf(SummarizeError);
    expect((result as SummarizeError).message).toBe("Error on summarize: Error occurred while summarizing text.");
  });
});

import { ZodError } from "zod";
import { type Request, type Response, Router } from "express";

import { summarizeSchema } from "../schemas/summarize";
import { SummarizeDto } from "../../app/use-cases/summarize/dto";
import { SummarizeTextControllerFactory } from "../factories/summarize";

const route = Router();

route.post('/summarize', async (req: Request<any, any, SummarizeDto>, res: Response) => {
  try {
    const { text } = summarizeSchema.parse(req.body)

    const controller = SummarizeTextControllerFactory();
    const response = await controller.handle({
      text
    })

    return res.status(response.status_code).json(response.body)
  } catch (err) {
    if (err instanceof ZodError) {
      const formattedErrors = err.issues.map(e => ({
        field: e.path.join('.'),
        message: e.message,
      }));

      return res.status(400).json({ errors: formattedErrors });
    }

    return res.status(500).json({ message: (err as Error).message });
  }
})

export default route
import { server } from "./app";
import { logger } from "./logger";

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  logger.info(`🆙 Server up at: ${PORT}`);
});

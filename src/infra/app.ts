import "dotenv";
import http from "http";
import express from "express";

import summarizeRoutes from "./routes/summarize";

const app = express();

app.use(express.json({ limit: "12mb" }));
app.use(summarizeRoutes);

const server = http.createServer(app);

export { server };

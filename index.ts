import express from "express";
import { kafka } from "./src/kafka";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, Express!" + kafka);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

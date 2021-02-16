import express from "express";
import routes from "./routes";
import cors from "cors";
import { errors } from "celebrate";

const app = express();

app.use(express.json());
app.use(routes);
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE",
    allowedHeaders: [
      "Content-Type",
      "Depth",
      "User-Agent",
      "X-File-Size",
      "X-Requested-With",
      "If-Modified-Since",
      "X-File-Name",
      "Cache-Control",
      "Authorization",
    ],
  })
);
app.use(errors());

app.listen(3333);

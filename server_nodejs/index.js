import express from "express";
import myRoutes from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", myRoutes);

app.listen(8800);
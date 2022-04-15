import express from "express";
import "dotenv/config";
import { router } from "./Routes.js"

const app = express();

app.use(express.json());
app.use(router)

app.listen(process.env.PORT, ()=>console.log("Server is up and running in port 3333."));
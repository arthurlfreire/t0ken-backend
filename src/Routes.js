import { Router } from "express";
import logUserToAuthController from "./controllers/logUserToAuth.js";
import verifyTokenController from "./controllers/verifyToken.js";

export const router = new Router();

const logUserToAuth = new logUserToAuthController();
const verifyToken = new verifyTokenController();

router.get("/auth/signup", logUserToAuth.handle);
router.post("/auth/verifyToken", verifyToken.handle);
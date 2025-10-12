import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { shouldBeLoggedIn } from "../controllers/testController.js";

const router = express.Router();

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

export default router;

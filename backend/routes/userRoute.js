import express from "express";
const router = express.Router();
import { register, login, logout } from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { getUsers, updateUser } from "../controllers/userController.js";

router.get("/", getUsers);
router.put("/:id", verifyToken, updateUser);
// router.delete("/:id", verifyToken, deleteUser);
// router.post("/save", verifyToken, savePost);

export default router;

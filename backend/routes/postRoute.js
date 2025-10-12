import express from "express";
import {
  addPost,
  getPost,
  getPosts,
  profilePosts,
  savePost,
} from "../controllers/postController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/profilePosts", verifyToken, profilePosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.post("/save", verifyToken, savePost);
// router.put("/:id", verifyToken, updatePost);
// router.delete("/:id", verifyToken, deletePost);

export default router;

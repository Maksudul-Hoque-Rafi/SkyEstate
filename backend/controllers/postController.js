import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";
import dotenv from "dotenv";
dotenv.config();

export const getPosts = async (req, res) => {
  const query = req.query;
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
      include: { postDetail: true, user: { omit: { password: true } } },
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get posts!" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: { postDetail: true, user: { omit: { password: true } } },
    });

    const token = req.cookies.token;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (!err) {
          const userId = payload.id;
          const saved = await prisma.savedPost.findUnique({
            where: { userId_postId: { postId: id, userId } },
          });
          res.status(200).json({ ...post, isSaved: saved ? true : false });
        } else {
          res.status(200).json({ ...post, isSaved: false });
        }
      });
    } else {
      res.status(200).json({ ...post, isSaved: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get post!" });
  }
};

export const profilePosts = async (req, res) => {
  try {
    const userId = req.userId;
    const userPosts = await prisma.user.findUnique({
      where: { id: userId },
      select: { post: true },
    });

    let savedPosts = await prisma.savedPost.findMany({
      where: { userId },
      select: { post: true },
    });

    savedPosts = savedPosts.map((item) => item.post);
    res.status(200).json({ userPosts, savedPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get profilePosts!" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        postDetail: { create: body.postDetail },
        user: { connect: { id: tokenUserId } },
      },
      include: { postDetail: true, user: true },
    });
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add posts!" });
  }
};

export const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId;
  try {
    const savedPost = await prisma.savedPost.findUnique({
      where: { userId_postId: { userId: tokenUserId, postId } },
    });

    if (savedPost) {
      res.status(200).json({ message: "Already Saved Post" });
    } else {
      await prisma.user.update({
        where: { id: tokenUserId },
        data: { savedPost: { create: { post: { connect: { id: postId } } } } },
      });
      res.status(200).json({ message: "Post Saved Successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to save post!" });
  }
};

// export const deletePost = async (req, res) => {
//   const id = req.params.id;
//   const tokenUserId = req.userId;

//   try {
//     const post = await prisma.post.findUnique({
//       where: { id },
//     });

//     if (post.userId !== tokenUserId) {
//       return res.status(403).json({ message: "Not Authorized!" });
//     }

//     await prisma.post.delete({
//       where: { id },
//     });

//     res.status(200).json({ message: "Post deleted" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to delete post" });
//   }
// };
// prisma.post.create({ data: { user: {}, postDetail: {} } });
// prisma.savedPost.create({ data: {} });
// prisma.dummyModel.create({ data: { user: {} } });
// prisma.user.create({ data: { dummyModel: { create: { post: { connect } } } } });

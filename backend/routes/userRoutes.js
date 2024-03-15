import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// Get all users
router.get("/", async (request, response) => {
  try {
    const users = await User.find();
    return response.status(200).json(users);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Create a new user
router.post("/", async (request, response) => {
  const newUser = new User(request.body);
  try {
    const user = await User.create(newUser);
    return response.status(201).json(user);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
});

export default router;

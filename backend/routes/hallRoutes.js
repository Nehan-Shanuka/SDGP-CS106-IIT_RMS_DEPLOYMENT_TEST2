import express from "express";
import { Hall } from "../models/hallModel.js";

const router = express.Router();

// Route for getting all halls
router.get("", async (request, response) => {
  try {
    const hall = await Hall.find({});
    return response.status(200).json(hall);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Route for creating a new hall
router.post("", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.capacity ||
      !request.body.location ||
      !request.body.facilities
    ) {
      return response.status(400).send({ message: "All fields are required" });
    }
    const newHall = {
      name: request.body.name,
      capacity: request.body.capacity,
      location: request.body.location,
      facilities: request.body.facilities,
    };

    const hall = await Hall.create(newHall);
    return response.status(201).json(hall);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;
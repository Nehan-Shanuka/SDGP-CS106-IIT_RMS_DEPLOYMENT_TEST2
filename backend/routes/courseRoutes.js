import express from "express";
import { Course } from "../models/courseModel.js";

const router = express.Router();

// Route for getting all halls
router.get("", async (request, response) => {
  try {
    // Get all courses
    const courses = await Course.find({});
    return response.status(200).json(courses);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Route for creating a new hall
router.post("", async (request, response) => {
  try {
    // Check if all fields are present
    if (
      !request.body.hallNumber ||
      !request.body.building ||
      !request.body.moduleName ||
      !request.body.time ||
      !request.body.projector_count ||
      // Check if the value is undefined
      // This is a boolean field so we can't use !request.body.projector_count
      !request.body.whiteboard_availability  === undefined ||
      !request.body.mic_speacker === undefined ||
      !request.body.type
    ) {
      return response.status(400).send({ message: "All fields are required" });
    }
    // Create a new course
    const newCourse = {
      hallNumber: request.body.hallNumber,
      building: request.body.building,
      moduleName: request.body.moduleName,
      time: request.body.time,
      projector_count: request.body.projector_count,
      whiteboard_availability: request.body.whiteboard_availability,
      mic_speacker: request.body.mic_speacker,
      type: request.body.type,
    };

    // Save the new course
    const course = await Course.create(newCourse);
    // Return the new course
    return response.status(201).json(course);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;

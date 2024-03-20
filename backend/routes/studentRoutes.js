import express from "express";
import { Student } from "../models/studentModel.js";

const router = express.Router();

// Get all students
router.get("/", async (request, response) => {
  try {
    const students = await Student.find();
    return response.status(200).json(students);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Create a new student
router.post("/", async (request, response) => {
  const newStudent = new Student(request.body);
  try {
    const student = await Student.create(newStudent);
    return response.status(201).json(student);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
});

export default router;
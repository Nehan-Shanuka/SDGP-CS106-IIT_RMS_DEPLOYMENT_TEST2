import express from "express";
import { Group } from "../models/groupModel.js";
import { Student } from "../models/studentModel.js";
import { StudentGrouping } from "../controllers/studentGrouping.js";

const router = express.Router();

// Get all groups
router.get("/", async (request, response) => {
  try {
    const groups = await Group.find();
    return response.status(200).json(groups);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Create a new group
router.post("/", async (request, response) => {

  const students = await Student.find();
  console.log(students);
  console.log(students.length);
  const studentGrouping = new StudentGrouping(students);

  // const newGroup = new Group(request.body);

  try {
    const group = await Group.create(studentGrouping);
    return response.status(201).json(group);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
});

export default router;
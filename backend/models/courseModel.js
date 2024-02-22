import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  hallNumber: {
    type: String,
    required: true,
  },
  building: {
    type: String,
    required: true,
  },
  moduleName: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  projector_count: {
    type: Number,
    required: true,
  },
  whiteboard_availability: {
    type: Boolean,
    required: true,
  },
  mic_speacker: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export const Course = mongoose.model("Course", courseSchema);
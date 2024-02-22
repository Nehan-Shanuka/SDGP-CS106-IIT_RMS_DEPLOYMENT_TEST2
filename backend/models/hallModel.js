import mongoose from "mongoose";

const hallSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  facilities: {
    type: [String],
    required: true,
  },
});

export const Hall = mongoose.model("Hall", hallSchema);
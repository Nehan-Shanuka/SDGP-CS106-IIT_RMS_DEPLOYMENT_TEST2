import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  students: [
    {
      id: {
        type: Number,
        required: true,
      },
      op1: {
        type: String,
        required: true,
      },
      op2: {
        type: String,
        required: true,
      },
    },
  ],
  modules: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Group = mongoose.model("Group", groupSchema);

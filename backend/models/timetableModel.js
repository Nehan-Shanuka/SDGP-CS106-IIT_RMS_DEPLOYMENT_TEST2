import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({
  groupID: {
    type: String,
  },
  groupName: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  sessions: [
    {
      day: {
        type: String,
        required: true,
      },
      timeSessions: {
        time_01: {
          reservationID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservation",
          },
          buildingID: {
            type: String,
            // required: true,
          },
          hallID: {
            type: String,
            // required: true,
          },
          type: {
            type: String,
            // required: true,
          },
          subject: {
            type: String,
            // required: true,
          },
          lecturer: {
            type: String,
            // required: true,
          },
        },
        time_02: {
          reservationID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservation",
          },
          buildingID: {
            type: String,
            // required: true,
          },
          hallID: {
            type: String,
            // required: true,
          },
          type: {
            type: String,
            // required: true,
          },
          subject: {
            type: String,
            // required: true,
          },
          lecturer: {
            type: String,
            // required: true,
          },
        },
        time_03: {
          reservationID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservation",
          },
          buildingID: {
            type: String,
            // required: true,
          },
          hallID: {
            type: String,
            // required: true,
          },
          type: {
            type: String,
            // required: true,
          },
          subject: {
            type: String,
            // required: true,
          },
          lecturer: {
            type: String,
            // required: true,
          },
        },
        time_04: {
          reservationID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservation",
          },
          buildingID: {
            type: String,
            // required: true,
          },
          hallID: {
            type: String,
            // required: true,
          },
          type: {
            type: String,
            // required: true,
          },
          subject: {
            type: String,
            // required: true,
          },
          lecturer: {
            type: String,
            // required: true,
          },
        },
      },
    },
  ],
});

export const Timetable = mongoose.model("Timetable", timetableSchema);

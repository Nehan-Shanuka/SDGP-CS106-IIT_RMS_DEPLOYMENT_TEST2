import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    hallID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hall",
    },
    day: {
        type: String,
    },
    date: {
        type: Date,
    },
    time: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
    lecturer: {
        type: String,
        required: true,
    },
    course: {
        type: String,
    },
    tutorialGroups: {
        type: [String],
    },
    confirmation: {
        type: Boolean,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
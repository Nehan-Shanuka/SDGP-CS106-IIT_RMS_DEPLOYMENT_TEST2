import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
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
import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    hallID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hall",
    },
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
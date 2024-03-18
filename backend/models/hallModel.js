import mongoose from "mongoose";

const hallSchema = new mongoose.Schema({
    hallID: {
        type: String,
        required: true,
    },
    buildingID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Building",
    },
    capacity: {
        type: Number,
        required: true,
    },
    projectorCount: {
        type: Number,
        required: true,
    },
    whiteboardAvailability: {
        type: Boolean,
        required: true,
    },
    micAndSpeaker: {
        type: Boolean,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:  "Reservation",
    }],
    plannedSessions: [{
        date: { type: Date, required: true },
        reservations: {
            time_01: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
            time_02: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
            time_03: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
            time_04: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
        },
    }],
    timetableSessions: [{
        day: { type: String, required: true },
        reservations: {
            time_01: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
            time_02: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
            time_03: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
            time_04: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
        },
    }],
});

export const Hall = mongoose.model("Hall", hallSchema);
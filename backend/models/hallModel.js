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
    }]
});

export const Hall = mongoose.model("Hall", hallSchema);
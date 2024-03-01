import mongoose from "mongoose";

const buildingSchema = new mongoose.Schema({
    buildingName: {
        type: String,
        required: true,
    },
    buildingID: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    lectureHalls: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hall",
    }],
});

export const Building = mongoose.model("Building", buildingSchema);
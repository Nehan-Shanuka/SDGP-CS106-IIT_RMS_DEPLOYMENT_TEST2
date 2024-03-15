import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    adminPrivilege: {
        type: Boolean,
        required: true,
    },
});

export const User = mongoose.model("User", userSchema);
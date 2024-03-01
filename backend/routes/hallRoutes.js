import express from "express";
import { Hall } from "../models/hallModel.js";
import { Building } from "../models/buildingModel.js";

const router = express.Router();

router.post("/:buildingId", async (request, response) => {
    const buildingId = request.params.buildingId;
    const newHall = new Hall(request.body);

    try {
        const savedHall = await Hall.create(newHall);
        await Building.findByIdAndUpdate(
            buildingId,
            { $push: { lectureHalls: savedHall._id } },
            { new: true }
        );

        return response.status(201).json(savedHall);

    } catch (error) {     
        response.status(500).send({ message: error.message });
    }
});

export default router;
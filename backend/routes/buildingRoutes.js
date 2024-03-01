import express from "express";
import { Building } from "../models/buildingModel.js";

const router = express.Router();

// Create a new building
router.post("/", async (request, response) => {
    const newBuilding = new Building(request.body);

    try {
        const savedBuilding = await Building.create(newBuilding);
        return response.status(201).json(savedBuilding);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

// Get all buildings
router.get("/", async (request, response) => {
    try {
        const buildings = await Building.find();
        return response.status(201).json(buildings);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

router.put("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const updatedBuilding = await Building.findByIdAndUpdate(id, request.body, { new: true });
        return response.status(201).json(updatedBuilding);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        await Building.findByIdAndDelete(id);
        return response.status(201).json({ message: "Building deleted successfully" });
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
})

export default router;
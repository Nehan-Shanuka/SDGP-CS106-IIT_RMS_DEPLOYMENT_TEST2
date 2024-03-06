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
    await savedHall.updateOne({ buildingID: buildingId });

    return response.status(201).json(savedHall);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Get all halls
router.get("/", async (request, response) => {
  try {

    let buildingShortName = request.query.buildingID;

    console.log("buildingName: ", buildingShortName);

    if (buildingShortName.length === 0) {
      buildingShortName = "All";
    } else {
      buildingShortName = request.query.buildingID.split(",");
    }

    const buildingIDs = await Building.find({ buildingID: { $in: [...buildingShortName] } }).select("_id");

    const halls = await Hall.find(
      buildingShortName === "All"
        ? {}
        : {
            buildingID: { $in: buildingIDs },
          }
    );

    return response.status(201).json(halls);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;
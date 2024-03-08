import express from "express";
import { Reservation } from "../models/reservationModel.js";
import { Hall } from "../models/hallModel.js";

const router = express.Router();

// Create a new reservation
router.post("/:hallId", async (request, response) => {
  const hallId = request.params.hallId;
  const newReservation = new Reservation(request.body);

  try {
    const savedReservation = await Reservation.create(newReservation);
    await Hall.findByIdAndUpdate(
      hallId,
      { $push: { reservations: savedReservation._id } },
      { new: true }
    );
    await savedReservation.updateOne({ hallID: hallId }); // savedReservation.hallID = hallId;

    return response.status(201).json(savedReservation);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Get all reservations
router.get("/", async (request, response) => {
  try {
    let confirmation = request.query.confirmation;

    const reservations = await Reservation.find(
      confirmation === undefined
        ? {}
        : {
            confirmation: confirmation,
          }
    );
    return response.status(201).json(reservations);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Update a reservation's confirmation status
router.put("/:id", async (request, response) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      request.params.id,
      { confirmation: request.body.confirmation },
      { new: true }
    );

    if (!reservation) {
      return response.status(404).send({ message: "Reservation not found" });
    }

    return response.status(201).json(reservation);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;

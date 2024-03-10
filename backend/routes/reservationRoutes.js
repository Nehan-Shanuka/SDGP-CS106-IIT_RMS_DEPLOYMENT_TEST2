import express from "express";
import { Reservation } from "../models/reservationModel.js";
import { Hall } from "../models/hallModel.js";
import { get } from "mongoose";

const router = express.Router();

// Create a new reservation
router.post("/:hallId", async (request, response) => {
  const hallId = request.params.hallId;
  const newReservation = new Reservation(request.body);
  const hall = await Hall.findById(hallId);

  const exsistingPlannedSessionIndex = hall.plannedSessions.findIndex(
    plannedSession => plannedSession.date.toISOString().slice(0, 10) === newReservation.date.toISOString().slice(0, 10)
  ); // findIndex returns -1 if the element is not found

  console.log("plannedSession", hall);
  console.log("exsistingPlannedSessionIndex", exsistingPlannedSessionIndex);

  try {
    const savedReservation = await Reservation.create(newReservation);

    if (exsistingPlannedSessionIndex !== -1) {
      // If the date exists, update the time under that date
      const updatedPlannedSessions = [...hall.plannedSessions];
      const timeSlot = getTimeSlot(savedReservation.time);
      updatedPlannedSessions[exsistingPlannedSessionIndex].reservations[
        timeSlot
      ] = savedReservation._id;

      await Hall.findByIdAndUpdate(
        hallId,
        {
          $set: {
            plannedSessions: updatedPlannedSessions
          }
        },
        { new: true }
      );

    } else {

      // If the date does not exist, create a new date and time slot
      const newPlannedSession = {
        date: savedReservation.date,
        reservations: {
          time_01: getTimeSlot(savedReservation.time) === "time_01" ? savedReservation._id : null,
          time_02: getTimeSlot(savedReservation.time) === "time_02" ? savedReservation._id : null,
          time_03: getTimeSlot(savedReservation.time) === "time_03" ? savedReservation._id : null,
          time_04: getTimeSlot(savedReservation.time) === "time_04" ? savedReservation._id : null,
        }
      };

      await Hall.findByIdAndUpdate(
        hallId,
        {
          $push: {
            plannedSessions: newPlannedSession
          },
        },
        { new: true }
      );
    }

    // Function to get the time slot key based on savedReservation.time
    function getTimeSlot(time) {
      switch (time) {
        case "08.30 - 10.30":
          return "time_01";
        case "10.30 - 12.30":
          return "time_02";
        case "13.30 - 15.30":
          return "time_03";
        case "15.30 - 17.30":
          return "time_04";
        default:
          return null;
      }
    }

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

// Delete a reservation
router.delete("/:id", async (request, response) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(request.params.id);

    if (!reservation) {
      return response.status(404).send({ message: "Reservation not found" });
    }

    return response.status(201).json(reservation);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;

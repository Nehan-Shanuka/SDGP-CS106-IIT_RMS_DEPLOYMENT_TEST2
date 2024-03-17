import express from "express";
import { Reservation } from "../models/reservationModel.js";
import { Hall } from "../models/hallModel.js";
import { Building } from "../models/buildingModel.js";

const router = express.Router();

// Get all reservations
router.get("/", async (request, response) => {
  try {
    // Get the confirmation status, modules and buildings from the request query
    let confirmation = request.query.confirmation;
    let modules =
      request.query.subject === undefined ? [] : request.query.subject;
    let buildings =
      request.query.buildingID === undefined ? [] : request.query.buildingID;

    const filter = {};

    // If the confirmation status is defined, set it to the filter
    if (confirmation !== undefined) {
      confirmation = request.query.confirmation;
      filter.confirmation = confirmation;
    }

    // If the modules are defined, set it to the filter
    if (modules.length !== 0) {
      modules = request.query.subject.split(",");
      filter.subject = { $in: modules };
    }

    // If the buildings are defined, set it to the filter
    if (buildings.length !== 0) {
      buildings = request.query.buildingID.split(",");

      const buildingIDs = await Building.find({
        buildingID: { $in: [...buildings] },
      }).select("_id");

      const hallIds = await Hall.find({
        buildingID: { $in: buildingIDs },
      }).select("_id");
      filter.hallID = { $in: hallIds };
    }

    // Get the reservations according to the filter
    const reservations = await Reservation.find(filter);

    // Return the reservations
    return response.status(201).json(reservations);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Create a new reservation
router.post("/:hallId", async (request, response) => {
  // Get the hallID from the request parameters
  const hallId = request.params.hallId;
  // Create a new reservation from the request body
  const newReservation = new Reservation(request.body);

  try {
    // Create a new reservation
    const savedReservation = await Reservation.create(newReservation);

    // savedReservation.hallID = hallId;
    await savedReservation.updateOne({ hallID: hallId });

    // Return the saved reservation
    return response.status(201).json(savedReservation);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Update a reservation's confirmation status
router.put("/:id", async (request, response) => {
  try {
    // Get the reservation according to the id
    const savedReservation = await Reservation.findById(request.params.id);
    // Get the hallID that the reservation is made for
    const hallId = savedReservation.hallID;
    // Get the hall according to the hallID
    const hall = await Hall.findById(hallId);

    // Find the index of the planned session's date that the reservation is made for
    const exsistingPlannedSessionIndex = hall.plannedSessions.findIndex(
      (plannedSession) =>
        plannedSession.date.toISOString().slice(0, 10) ===
        savedReservation.date.toISOString().slice(0, 10)
    ); // findIndex returns -1 if the element is not found

    // Check if the planned session exists at the date of the reservation
    if (exsistingPlannedSessionIndex !== -1) {
      // If the date exists, update the time under that date
      const updatedPlannedSessions = [...hall.plannedSessions];
      const timeSlot = getTimeSlot(savedReservation.time);

      // Check if the time slot is already taken
      if (
        updatedPlannedSessions[exsistingPlannedSessionIndex].reservations[
          timeSlot
        ] !== null
      ) {
        return response
          .status(400)
          .send({ message: "Time slot already taken" });
      } else {
        // If the time slot is not taken, update the time slot with the reservation id
        updatedPlannedSessions[exsistingPlannedSessionIndex].reservations[
          timeSlot
        ] = savedReservation._id;

        // Update the planned sessions
        await Hall.findByIdAndUpdate(
          hallId,
          {
            $set: {
              plannedSessions: updatedPlannedSessions,
            },
          },
          { new: true }
        );
      }
    } else {
      // If the date does not exist, create a new date and time slot
      const newPlannedSession = {
        date: savedReservation.date,
        reservations: {
          time_01:
            getTimeSlot(savedReservation.time) === "time_01"
              ? savedReservation._id
              : null,
          time_02:
            getTimeSlot(savedReservation.time) === "time_02"
              ? savedReservation._id
              : null,
          time_03:
            getTimeSlot(savedReservation.time) === "time_03"
              ? savedReservation._id
              : null,
          time_04:
            getTimeSlot(savedReservation.time) === "time_04"
              ? savedReservation._id
              : null,
        },
      };

      // Push the new planned session to the hall's planned sessions
      await Hall.findByIdAndUpdate(
        hallId,
        {
          $push: {
            plannedSessions: newPlannedSession,
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

    // Update the reservation's confirmation status
    const reservation = await Reservation.findByIdAndUpdate(
      request.params.id,
      { confirmation: true },
      { new: true }
    );

    // Return the updated reservation
    return response.status(201).json(reservation);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Delete a reservation
router.delete("/:id", async (request, response) => {
  try {
    // Get the reservation according to the id
    const reservation = await Reservation.findByIdAndDelete(request.params.id);
    console.log(reservation);

    if (reservation.confirmation && reservation.date !== undefined) {
      // Get the hallID that the reservation is made for
      const hallId = reservation.hallID;
      // Get the hall according to the hallID
      const hall = await Hall.findById(hallId);
      console.log(hall);

      // Find the index of the planned session's date that the reservation is made for
      const exsistingPlannedSessionIndex = hall.plannedSessions.findIndex(
        (plannedSession) =>
          plannedSession.date.toISOString().slice(0, 10) ===
          reservation.date.toISOString().slice(0, 10)
      ); // findIndex returns -1 if the element is not found

      // If the date exists, update the time under that date
      if (exsistingPlannedSessionIndex !== -1) {
        const updatedPlannedSessions = [...hall.plannedSessions];
        const timeSlot = getTimeSlot(reservation.time);

        // Update the time slot with null
        updatedPlannedSessions[exsistingPlannedSessionIndex].reservations[
          timeSlot
        ] = null;

        // Update the planned sessions
        await Hall.findByIdAndUpdate(
          hallId,
          {
            $set: {
              plannedSessions: updatedPlannedSessions,
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
    }

    if (reservation.confirmation && reservation.day !== undefined) {
      // Get the hallID that the reservation is made for
      const hallId = reservation.hallID;
      // Get the hall according to the hallID
      const hall = await Hall.findById(hallId);
      console.log(hall);

      // Find the index of the planned session's date that the reservation is made for
      const exsistingTimetableSessionIndex = hall.timetableSessions.findIndex(
        (timetableSession) => timetableSession.day === reservation.day
      ); // findIndex returns -1 if the element is not found

      // If the date exists, update the time under that date
      if (exsistingTimetableSessionIndex !== -1) {
        const updatedTimetableSessions = [...hall.timetableSessions];
        const timeSlot = getTimeSlot(reservation.time);

        // Update the time slot with null
        updatedTimetableSessions[exsistingTimetableSessionIndex].reservations[
          timeSlot
        ] = null;

        // Update the planned sessions
        await Hall.findByIdAndUpdate(
          hallId,
          {
            $set: {
              timetableSessions: updatedTimetableSessions,
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
    }

    // If the reservation is not found, return a 404 status
    if (!reservation) {
      return response.status(404).send({ message: "Reservation not found" });
    }

    // Delete the reservation from the hall's planned sessions
    return response.status(201).json(reservation);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;

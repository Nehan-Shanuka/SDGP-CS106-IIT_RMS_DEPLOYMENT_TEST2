import express from "express";
import { Timetable } from "../models/timetableModel.js";
import { Hall } from "../models/hallModel.js";
import { Reservation } from "../models/reservationModel.js";
import { Building } from "../models/buildingModel.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const timetable = await Timetable.find({});
    response.status(200).json(timetable);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const timetable = await Timetable.findById(request.params.id);
    response.status(200).json(timetable);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

router.post("/", async (request, response) => {
  // Get the hallID from the request parameters
  const newTimetable = new Timetable(request.body);

  const sessions = newTimetable.sessions;
  // console.log(sessions);

  for (let i = 0; i < sessions.length; i++) {
    try {
      const day = sessions[i].day;
      const timeSessions = sessions[i].timeSessions;

      for (let k = 1; k <= 4; k++) {
        const time = `time_0${k}`;
        // console.log(day, " - ", time);

        const timeSession = timeSessions[time];
        // console.log(timeSession);

        if (timeSession.hallID === undefined) {
          continue;
        } else {
          const building = await Building.findOne({
            buildingID: timeSession.buildingID,
          }).select("_id");
          // const buildingID = building.id;
          const hall = await Hall.findOne({
            buildingID: building,
            hallID: timeSession.hallID,
          }).select("_id");
          // console.log(timeSession.buildingID, hall);

          const newReservation = new Reservation({
            hallID: hall,
            day: day,
            time:
              time === "time_01"
                ? "08:30 - 10:30"
                : time === "time_02"
                ? "10:30 - 12:30"
                : time === "time_03"
                ? "13:30 - 15:30"
                : "15:30 - 17:30",
            subject: timeSession.subject,
            type: timeSession.type,
            lecturer: timeSession.lecturer,
            confirmation: true,
          });

          // console.log(day, i, newReservation);
          // console.log("Previous", newTimetable);

          const savedReservation = await Reservation.create(newReservation);
          const reservationID = savedReservation._id;
          // console.log("Saved Reservation ", savedReservation);
          // console.log("Saved Reservation ID ", savedReservation.day, " - ", savedReservation.time);

          // console.log(i)
          newTimetable.sessions[i].timeSessions[time].reservationID = reservationID;

          // console.log("New Timetable ",day , time, newTimetable.sessions[i].timeSessions[time]);

          // console.log("New Timetable ",day , time, newTimetable.sessions[i].timeSessions[time]);

          const reservationHall = await Hall.findById(hall);

          const exsistingDayIndex = reservationHall.timetableSessions.findIndex(
            (timetableSession) => timetableSession.day === savedReservation.day
          ); // findIndex returns -1 if the element is not found

          if (exsistingDayIndex !== -1) {
            const updatedHallTimetable = [...reservationHall.timetableSessions];
            updatedHallTimetable[exsistingDayIndex].reservations[time] = reservationID;

            const updatedHall = await Hall.findByIdAndUpdate(
              hall,
              {
                $set: {
                  timetableSessions: updatedHallTimetable,
                },
              },
              { new: true }
            );
          } else {
            const newTimetableSession = {
              day: day,
              reservations: {
                time_01: time === "time_01" ? reservationID : null,
                time_02: time === "time_02" ? reservationID : null,
                time_03: time === "time_03" ? reservationID : null,
                time_04: time === "time_04" ? reservationID : null,
              },
            };

            const updatedHall = await Hall.findByIdAndUpdate(
              hall,
              {
                $push: {
                  timetableSessions: newTimetableSession,
                },
              },
              { new: true }
            );
          }
        }
      }
    } catch (error) {
      response.status(400).send({ message: error.message });
    }
  }

  try {
    const savedTimetable = await newTimetable.save();
    response.status(201).json(savedTimetable);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
});

export default router;

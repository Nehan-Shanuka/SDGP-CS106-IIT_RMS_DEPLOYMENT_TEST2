import express from "express";
import { PORT, MONGODB } from "./config.js";
import mongoose from "mongoose";
import hallRoutes from "./routes/hallRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to IIT RMS server!");
});

app.use("/halls", hallRoutes);

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("App connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

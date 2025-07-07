// const express = require("express");
import express from "express";
import connectToDatabase from "./dbconfig.js";
import user from "./user.js";

connectToDatabase()
  .then(() => {
    const app = express();

    app.use(express.json()); // Middleware to parse JSON bodies

    const PORT = process.env.PORT || 3050;

    // get, post, put, delete
    // read, create, update, delete

    app.post("/api/data", async (req, res) => {
      try {
        const newUser = new user(req.body);
        await newUser.save();
        res.send("User successfully created");
      } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).send("Internal Server Error");
      }
    });

    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });

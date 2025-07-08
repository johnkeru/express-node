// const express = require("express");
import express from "express";
import connectToDatabase from "./config/dbconfig.js";
import userRouter from "./routers/user_router.js";

connectToDatabase()
  .then(() => {
    const app = express();

    app.use(express.json()); // Middleware to parse JSON bodies

    const PORT = process.env.PORT || 3050;

    // get, post, put, delete - server
    // read, create, update, delete - db

    app.use(userRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });

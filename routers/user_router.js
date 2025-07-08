import express from "express";
import {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
} from "../controllers/user_controller.js";

const userRouter = express.Router();

userRouter.get("/api/users", getAllUsers);

userRouter.post("/api/users", addUser);

userRouter.put("/api/users/:id", updateUser);

userRouter.delete("/api/users/:id", deleteUser);

// userRouter.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

export default userRouter;

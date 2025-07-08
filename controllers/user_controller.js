import user from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

export const addUser = async (req, res) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    res.send("User successfully created");
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    // const newUser = new user(req.body);
    // await newUser.save();
    const updatedUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send("User successfully created");
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.findByIdAndDelete(id);
    res.send("User successfully deleted");
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

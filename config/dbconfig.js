const databaseConnectionString = "mongodb://localhost:27017/test_db";
import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(databaseConnectionString);
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e.message);
  }
};

export default connectToDatabase;

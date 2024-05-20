import mongoose from "mongoose";
const dburl = process.env.dburl || "mongodb://localhost:27017";
const connectDb = async (a) => {
  try {
    const option = { dbName: "userinfo" };
    await mongoose.connect(dburl, option);
    console.log("db connected successfully");
  } catch (err) {
    console.log(err);
  }
};
export { connectDb, dburl };

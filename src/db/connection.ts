import mongoose from "mongoose";

export default async function connectdb() {
  let connection;
  if (!connection) {
    connection = mongoose
      .connect(process.env.MONGO_URI as string)
      .then(() => {
        console.log("MONGODB CONNECTED!");
      })
      .catch((e) => {
        console.log("ERROR CONNECTING MONGODB -->", e);
      });
  }
}

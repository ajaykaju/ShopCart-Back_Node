import express from "express";
import "./db/mongoose.js";
import userRoute from "./routers/user.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(userRoute);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

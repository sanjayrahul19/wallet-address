import express from "express";
const app = express();
const PORT = 8000;
import { connectDB } from "./config/db";
import { router } from "./router/router";
import { validWalletAddress } from "./controller/wallet";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
validWalletAddress()

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server is up and running");
});

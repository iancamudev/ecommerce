import express from "express";
require("dotenv").config();
const BACKEND_PORT = process.env.BACKEND_PORT;

//creamos el servidor
const app = express();

//middlewares
app.use(express.json()); // transforma la req.body a un json

app.listen(BACKEND_PORT, () => {
  console.log("Server running on ", BACKEND_PORT);
});

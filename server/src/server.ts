import contactRoutes from "./routes/contact";
import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/contact", contactRoutes);

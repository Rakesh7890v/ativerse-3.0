const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const ParticipantsModel = require("./models/Participants");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "https://ativerse-3-0-hackathon.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


mongoose.connect("mongodb+srv://rishirakesh587_db_user:P89GrZ3GatR6Cysa@artiverse.st1etfp.mongodb.net/", {
  bufferCommands: false,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/addParticipants", async (req, res) => {
  try {
    const participant = await ParticipantsModel.create(req.body);
    res.status(201).json({
      message: "Participant added successfully",
      participant
    });
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ message: err.message });
  }
});

app.get("/participants", async (req, res) => {
  try {
    const participants = await ParticipantsModel.find({});
    res.json(participants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const router = require("./routers/appointmentRoutes");
app.use("/api/appointments", router);

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
  //app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch(err => console.error("DB connection error:", err));


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
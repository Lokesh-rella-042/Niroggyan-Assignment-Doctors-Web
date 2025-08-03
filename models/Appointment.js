const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    doctor: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  jobType: { type: String, required: true },
  status: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  technician: { type: String, required: true },
});

module.exports = mongoose.model("Job", JobSchema);

const express = require('express');
const Job = require('../models/job');

const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    const totalJobs = jobs.length; // Get the total number of jobs

    res.json({
      totalJobs,
      jobs,
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job) {
      res.json(job);
    } else {
      res.status(404).send('Job not found');
    }
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Add a new job
router.post('/', async (req, res) => {
  const {
    customerName,
    jobType,
    status,
    appointmentDate,
    technician,
  } = req.body;

  if (!customerName || !jobType || !status || !appointmentDate || !technician) {
    return res.status(400).json({ msg: 'Please include all required fields' });
  }

  try {
    const newJob = new Job({
      customerName,
      jobType,
      status,
      appointmentDate,
      technician,
    });
    const job = await newJob.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Update a job
router.put('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (job) {
      res.json(job);
    } else {
      res.status(404).send('Job not found');
    }
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete a job
router.delete('/:id', async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

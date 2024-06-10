# Job Management API

## Overview

This project is a simple job management system that provides a RESTful API for managing job records. It allows you to create, read, update, and delete job entries in a MongoDB database.

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [API Documentation](#api-documentation)
3. [Architecture and Libraries](#architecture-and-libraries)
4. [License](#license)

## Setup Instructions

### Prerequisites

- Node.js (v22.2.0 or higher)
- npm (v6 or higher)
- MongoDB

### Installation

1. Install the dependencies:

   ```sh
   npm install
   ```

2. Create a `.env` file in the root directory and add your MongoDB connection or use mine string and port:

   ```plaintext
   DB_CONNECTION_STRING=mongodb://localhost:27017/jobmanagement
   PORT=3000
   ```

3. Start the server:

   For development with automatic restarts:

   ```sh
   npm run dev
   ```

   For production:

   ```sh
   npm start
   ```

   The server will run on `http://localhost:3000`.

## API Documentation

### Get All Jobs with Pagination

- **Endpoint:** `GET /jobs`
- **Description:** Retrieve all jobs with pagination.
- **Query Parameters:**
  - `page` (optional): The page number (default: 1)
  - `limit` (optional): The number of jobs per page (default: 10)
- **Response:**

  ```json
  {
    "totalJobs": 50,
    "page": 1,
    "limit": 10,
    "jobs": [
      {
        "id": 1,
        "customerName": "John Doe",
        "jobType": "Plumbing",
        "status": "Scheduled",
        "appointmentDate": "2024-06-15T09:00:00Z",
        "technician": "Jane Smith"
      }
      // ...
    ]
  }
  ```

### Get Job by ID

- **Endpoint:** `GET /jobs/:id`
- **Description:** Retrieve a job by its ID.
- **Response:**

  ```json
  {
    "id": 1,
    "customerName": "John Doe",
    "jobType": "Plumbing",
    "status": "Scheduled",
    "appointmentDate": "2024-06-15T09:00:00Z",
    "technician": "Jane Smith"
  }
  ```

### Add a New Job

- **Endpoint:** `POST /jobs`
- **Description:** Create a new job.
- **Request Body:**

  ```json
  {
    "customerName": "Alice Johnson",
    "jobType": "Electrical",
    "status": "Completed",
    "appointmentDate": "2024-05-20T14:00:00Z",
    "technician": "Bob Brown"
  }
  ```

- **Response:**

  ```json
  {
    "id": 2,
    "customerName": "Alice Johnson",
    "jobType": "Electrical",
    "status": "Completed",
    "appointmentDate": "2024-05-20T14:00:00Z",
    "technician": "Bob Brown"
  }
  ```

### Update a Job

- **Endpoint:** `PUT /jobs/:id`
- **Description:** Update an existing job.
- **Request Body:** Any of the job fields to update.
- **Response:**

  ```json
  {
    "id": 1,
    "customerName": "John Doe",
    "jobType": "Plumbing",
    "status": "Scheduled",
    "appointmentDate": "2024-06-15T09:00:00Z",
    "technician": "Jane Smith"
  }
  ```

### Delete a Job

- **Endpoint:** `DELETE /jobs/:id`
- **Description:** Delete a job by its ID.
- **Response:** `204 No Content`

## Architecture and Libraries

### Project Structure

- **`app.js`**: The main entry point of the application.
- **`routes/jobs.js`**: Contains the routes for job-related endpoints.
- **`models/job.js`**: Defines the Mongoose model for the Job.
- **`db.js`**: Contains the logic for connecting to the MongoDB database.
- **`.env`**: For environment variables (not shown in the repository).

### Libraries Used

- **express**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **mongoose**: An elegant MongoDB object modeling for Node.js that provides schema-based solutions to model your application data.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **nodemon**: A tool that helps develop Node.js applications by automatically restarting the node application when file changes are detected in the directory.

### Design Choices

- **Separation of Concerns**: The code is organized into separate files and folders based on their responsibilities, which improves readability and maintainability.
- **Environment Variables**: Sensitive data and configuration parameters are stored in environment variables to enhance security and flexibility.
- **Pagination**: Implemented pagination for retrieving job records to handle large datasets efficiently.

By following these practices, the application remains modular, secure, and easy to maintain. Feel free to contribute or raise issues if you encounter any problems.

## License

This project is licensed under the ISC License.

---

Thank you for using the Job Management API!

# Job Portal Website

## Description
The Job Portal Website is a platform designed to facilitate job seekers and employers in the process of job listing, application, and management. The motivation behind this project was to create a user-friendly and efficient system that simplifies job-related activities. The website allows users to register, log in, create and manage job listings, apply for jobs, and view statistics related to job applications.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Install dependencies](#Install dependencies)
- [Setup](#Setup)
- [Usage](#usage)
  - [User Authentication](#user-authentication)
  - [Job Management](#job-management)
- [Controllers](#controllers)
- [Models](#models)
- [Contributing](#contributing)

## Features

- User Registration and Authentication
- Create, Update, and Delete Jobs
- View and Filter Jobs
- Job Application Statistics
- User Profile Update

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/piyush7401/Job_Portal

2. **Install dependencies**

- express: Web application framework for Node.js
- mongoose: MongoDB object modeling for Node.js
- bcryptjs: Library for hashing passwords
- jsonwebtoken: JSON Web Token (JWT) implementation for Node.js
- validator: Library for string validation and sanitization
- moment: Library for parsing, validating, manipulating, and formatting dates
- cors: Library allows or restricts cross-origin HTTP
- cookie-parser: It parses cookies attached to the client's request and makes them available

### Setup

1. **Backend Setup:**
   - Install Node.js and npm.
   - Install project dependencies: `npm install`.
   - Set up environment variables for API credentials.

2. **Frontend Setup:**
   - React is used for the frontend.
   - Install dependencies: `npm install`.
   - Start the development server: `npm start`.
  
## Usage
### User Authentication  
- Register: Create a new user account by providing a name, email, and password.
- Login: Existing users can log in using their email and password.
- User Profile Update: Users can update their profile details, including name, email, last name, and location.

### Job Management
- Create Job: Users can create new job listings by providing company and position details.
- View Jobs: Users can view a list of jobs, with options to filter by status, work type, and search.
- Update Job: Users can update their own jobs by modifying company and position details.
- Delete Job: Users can delete their own jobs.
- Job Statistics: Users can view statistics, including the total number of jobs and monthly job applications.

### Controllers
- authController.js: Handles user registration and login.
- jobsController.js: Manages job-related functionalities, including creation, retrieval, update, deletion, and statistics.
- userController.js: Handles user profile updates.

### Models
- userModel.js: Defines the user schema, including name, email, password, and location.
- jobsModel.js: Defines the job schema, including company, position, status, work type, work location, and createdBy.

### Contributing
Contributions are welcome! If you find any issues or have suggestions, please open an issue or create a pull request.

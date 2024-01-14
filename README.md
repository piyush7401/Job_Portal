# Job Portal Website

Welcome to the Job Portal website, a platform for users to register, log in, create, manage, and apply for jobs.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [User Authentication](#user-authentication)
  - [Job Management](#job-management)
- [Controllers](#controllers)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)

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

### Package Install
- express: Web application framework for Node.js
- mongoose: MongoDB object modeling for Node.js
- bcryptjs: Library for hashing passwords
- jsonwebtoken: JSON Web Token (JWT) implementation for Node.js
- validator: Library for string validation and sanitization
- moment: Library for parsing, validating, manipulating, and formatting dates
- cors: Library allows or restricts cross-origin HTTP
- cookie-parser: It parses cookies attached to the client's request and makes them available

  
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

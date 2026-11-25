Task Manager REST API

Project Description

Task Manager REST API is a backend application developed using Node.js and Express.js. It allows users to create, view, update, and delete tasks through REST API endpoints.

This project demonstrates the basic concepts of REST APIs and CRUD operations.

Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- PowerShell

Project Structure

task-manager-api/
│
├── controllers/
│   └── taskController.js
│
├── routes/
│   └── taskRoutes.js
│
├── Screenshots/
│   ├── api-running.png
│   ├── post-create.png
│   ├── get-all-tasks.png
│   ├── get-task-by-id.png
│   ├── put-update.png
│   ├── delete-task.png
│   └── postman-collection.png
│
├── server.js
├── package.json
├── package-lock.json
└── README.md

Features

1. Create a new task.
2. Get all tasks.
3. Get a task by ID.
4. Update an existing task.
5. Delete a task.

API Endpoints

Method| Endpoint| Description
POST| "/api/tasks"| Create a task
GET| "/api/tasks"| Get all tasks
GET| "/api/tasks/:id"| Get task by ID
PUT| "/api/tasks/:id"| Update a task
DELETE| "/api/tasks/:id"| Delete a task

Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project folder:

cd task-manager-api

Install dependencies:

npm install

Run the Project

Start the development server:

npm run dev

The server runs at:

http://localhost:3000

Open this address in your browser to check whether the API is running.

Testing

The API endpoints were tested using PowerShell HTTP requests. A Postman collection containing all five API requests is also included for reference.

Screenshots

API Running

"API Running" (Screenshots/api-running.png)

Create Task

"Create Task" (Screenshots/POST-create.png)

Get All Tasks

"Get All Tasks" (Screenshots/get-all-tasks.png)

Get Task By ID

"Get Task By ID" (Screenshots/get-task-by-id.png)

Update Task

"Update Task" (Screenshots/put-update.png)

Delete Task

"Delete Task" (Screenshots/delete-task.png)

Postman Collection

"Postman Collection" (Screenshots/postman-collection.png)

Storage

Tasks are stored temporarily in an in-memory JavaScript array. Data is lost when the server restarts. This project does not currently use a database.

What I Learned

Through this project, I learned how to build a REST API using Node.js and Express.js. I understood the basic concepts of HTTP methods such as GET, POST, PUT, and DELETE. I also learned how to create routes, use controllers, handle JSON requests and responses, validate input, and manage errors. I practised testing API endpoints using PowerShell and learned how to organize a backend project and prepare a Postman collection. This project improved my understanding of backend development and CRUD operations.

Author

Khairunnisa Athani

Computer Science and Engineering Student

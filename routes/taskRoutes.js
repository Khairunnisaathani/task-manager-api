const express = require('express');

const router = express.Router();

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

// 1. Create Task
router.post('/', createTask);

// 2. Get All Tasks
router.get('/', getAllTasks);

// 3. Get Task By ID
router.get('/:id', getTaskById);

// 4. Update Task
router.put('/:id', updateTask);

// 5. Delete Task
router.delete('/:id', deleteTask);

module.exports = router;
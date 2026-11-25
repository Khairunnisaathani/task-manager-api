let tasks = [];
let nextId = 1;

// CREATE TASK
const createTask = (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const task = {
        id: nextId++,
        title,
        description: description || "",
        completed: false
    };

    tasks.push(task);

    res.status(201).json({
        message: "Task created successfully",
        task
    });
};

// GET ALL TASKS
const getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

// GET TASK BY ID
const getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(task);
};

// UPDATE TASK
const updateTask = (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const { title, description, completed } = req.body;

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;

    res.status(200).json({
        message: "Task updated successfully",
        task
    });
};

// DELETE TASK
const deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(index, 1);

    res.status(200).json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};
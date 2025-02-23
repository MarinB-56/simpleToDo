const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// router.use(express.static('../public'));
// INDEX - GET all tasks
router.get('/', taskController.getAllTasks );
// NEW - GET a form to create a new task
router.get('/new', taskController.newTask);

router.route('/:id')
  .get(taskController.getTaskById)
  .post(taskController.createTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask)

// EDIT - GET a task to edit it
router.get('/:id/edit', taskController.editTask);

module.exports = router;

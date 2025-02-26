const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

// router.use(express.static('../public'));
// INDEX - GET all tasks
router.get('/', taskController.getAllTasks );

router.route('/:id')
  .get(taskController.getTaskById)
  .post(taskController.createTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask)

module.exports = router;

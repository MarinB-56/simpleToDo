const express = require('express');
const router = express.Router();

const tasks = [
  {
    id: 1,
    title: "Bosser le Wagon",
    content: "Penser à faire les exercices prévus du jour",
    done: false
  },
  {
    id: 2,
    title: "Laver la vaisselle",
    content: "Laver la vaisselle et mettre les affaires dans les placards",
    done: false
  },
  {
    id: 3,
    title: "Regarder un match",
    content: "Regarder un match de foot avec Cam et profiter du moment sans le ti boubou",
    done: false
  }
]

// router.use(express.static('../public'));
// INDEX - GET all tasks
router.get('/', (req, res) => {
  res.send("Tasks");
});

// NEW - GET a form to create a new task
router.get('/new', (req, res) => {
  res.send(`New task`);
});

router.route('/:id')
  .get((req, res) => { // SHOW - GET a precise task
    res.send(`Task number ${req.params.id}`);
  })
  .post((req, res) => { // CREATE - POST the new task
    res.send(`New task added to the list`);
  })
  .put((req, res) => {
    res.send(`Changed applied to task ${req.params.id}`)
  })
  .delete((req, res) => { // DELETE - DELETE a task
    res.send(`Task ${req.params.id} deleted`);
  })

// EDIT - GET a task to edit it
router.get('/:id/edit', (req, res) => {
  res.send(`Edit task number ${req.params.id}`);
})

module.exports = router;

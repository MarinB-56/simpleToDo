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

// Index
router.get('/', (req, res) => {
  res.send(tasks);
});

// Show
router.get('/:id', (req, res) => {
  // On veut récupérer l'id qui correspond
  res.send(`Tasks ${req.params.id}`);
});

// Create
router.post('/')

module.exports = router;

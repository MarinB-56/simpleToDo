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

exports.getAllTasks = (req, res) => {
  res.json(tasks);
}

exports.getTaskById = (req, res) => { // SHOW - GET a precise task
  const task = tasks.find(t => t.id == req.params.id )
  if (!task) {
    res.status(404).json({ message: "Tâche non trouvée" })
  }
  res.json(task);
}

exports.newTask = (req, res) => {
  res.send(`New task`);
}

exports.createTask = (req, res) => { // CREATE - POST the new task
  // Récupération des données
  const { title } = req.body;
  const newTask = { id: tasks.length + 1, title, done: false }
  tasks.push(newTask);
  res.status(201).json(newTask)
}

exports.updateTask = (req, res) => {
  res.send(`Changed applied to task ${req.params.id}`)
}

exports.deleteTask = (req, res) => { // DELETE - DELETE a task
  res.send(`Task ${req.params.id} deleted`);
}

exports.editTask = (req, res) => {
  res.send(`Edit task number ${req.params.id}`);
}

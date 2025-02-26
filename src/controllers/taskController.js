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
  const task = tasks.find(t => t.id === Number(req.params.id) )

  if (!task) {
    return res.status(404).json({ message: "Tâche non trouvée" })
  }

  res.json(task);
}

exports.createTask = (req, res) => { // CREATE - POST the new task
  // Récupération des données
  const { title, content }= req.body

  // Vérification du bon contenu
  if (title && content) {
    tasks.push({ id: tasks.length + 1, title, content, done: false })
  } else {
    return res.status(400).json({ message: "Tâche non enregistrée, erreur de synthaxe"})
  }
  res.json(tasks[tasks.length - 1])
}

exports.updateTask = (req, res) => {
  // Récupération de la tâche
  const { id } = req.params
  const task = tasks.find(t => t.id === Number(req.params.id));

  // Si la tâche n'existe pas
  if(!task) {
    return res.status(404).json({ message: "Tâche non trouvée"})
  }

  // Si la tâche existe, modification des valeurs de la tâche
  Object.assign(task, req.body);

  res.status(200).json({ message: "Tâche mise à jour", task});
}

exports.deleteTask = (req, res) => { // DELETE - DELETE a task
  // Récupération de la tâche
  const taskIndex = tasks.findIndex(t => t.id === Number(req.params.id))

  if(taskIndex === -1){
    return res.status(404).json({ message: "Tâche non trouvée" });
  }

  tasks.splice(id, 1);
  res.status(200).send({message: "Tâche supprimée avec succès"});
}

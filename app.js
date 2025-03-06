// Fonction qui simule une tâche asynchrone avec un délai aléatoire
function createTask(id) {
  return () => new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // 1 à 3 secondes
    setTimeout(() => resolve(`Tâche ${id} terminée après ${delay / 1000} secondes`), delay);
  });
}

// Liste de tâches
const tasks = [createTask(1), createTask(2), createTask(3)];

// Fonction à implémenter
async function executeTasks(tasks) {
  // Ton code ici
  for(const task of tasks){
    console.log(await task());
  }
}

// Exécuter les tâches
executeTasks(tasks);

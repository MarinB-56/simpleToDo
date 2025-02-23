const express = require('express');
const path = require('path');
const morgan = require('morgan');
const port = 3000;

const app = express();

// Middleware
app.use(morgan('dev')); // pour avoir l'url dans la console
app.use(express.json()); // pour transformer les données envoyées dans le body d'une requête HTTP en json propre
app.use(express.urlencoded({ extended : true })); // Pour récupérer les données d'un form envoyé au serveur

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Import des routes de tasks
const tasksRoutes = require('./src/routes/tasks');
app.use('/tasks', tasksRoutes);

// route par défaut
app.get('/', (req, res) => {
  res.send("simple Todo");
})

app.listen(port, () => {
  console.log(`Serveur demarré sous http://localhost:${port}`);
});

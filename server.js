const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const tasksRoutes = require('./src/routes/tasks');

app.use(morgan('dev'));

app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
  res.send("Coucouilles");
})

app.listen(port, () => {
  console.log(`Serveur demarré sous http://localhost:${port}`);
});

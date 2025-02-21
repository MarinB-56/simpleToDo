const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const tasksRoutes = require('./routes/tasks');

app.use(morgan('dev'));

app.use(express.static('public'));
app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
  console.dir(req, { depth: null, colors: true });
  res.send("Coucouilles");
})

app.listen(port, () => {
  console.log(`Serveur demarré sous http://localhost:${port}`);
});

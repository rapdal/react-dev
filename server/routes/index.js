const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoitems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:id', todosController.retrieve)

  app.post('/api/todos', todosController.create);  
  app.post('/api/todos/:id/items', todoItemsController.create);

  app.all('/api/todos/:id/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};
const Tasks = require('../controllers/tasksController');

module.exports = app => {
  app.get("/tasks", Tasks.getAll);
  app.get("/tasks/:_id", Tasks.getOne);
  app.post("/tasks", Tasks.create);
  app.put("/tasks/:_id", Tasks.update);
  app.delete("/tasks/:_id", Tasks.remove);
}
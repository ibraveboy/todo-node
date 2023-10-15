const Todo = require("../../models/todos");

const getAllTodos = async (req, res) => {
  return res.render("todos", {
    title: "Todos - All",
    todos: await Todo.getAllTodos(),
  });
};

const addTodo = async (req, res) => {
  const isCreated = await Todo.addTodo(req.body.todo);
  return res.render("todo-action", {
    title: "Todo - Created",
    isCreated,
    message: isCreated ? "Todo created successfully!" : "Todo creation failed!",
  });
};

const deleteTodo = async (req, res) => {
  const isDeleted = await Todo.deleteTodo(req.body.todo);
  return res.render("todo-action", {
    title: "Todo - Deleted",
    isDeleted,
    message: isDeleted ? "Todo deleted successfully!" : "Todo deletion failed!",
  });
};

module.exports = {
  getAllTodos,
  addTodo,
  deleteTodo,
};

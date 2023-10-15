const todos = [];

const getAllTodos = async () => {
  return todos;
};

const addTodo = async (todo) => {
  todos.push(todo);
  return true;
};

const deleteTodo = async (todo) => {
  const index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllTodos,
  addTodo,
  deleteTodo,
};

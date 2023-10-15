const express = require("express");
const Todo = require("../controllers/todos");
const router = express.Router();

/* GET todos listing. */
router.get("/all", function (req, res) {
  return Todo.getAllTodos(req, res);
});

router.post("/create", function (req, res) {
  return Todo.addTodo(req, res);
});

router.post("/delete", function (req, res) {
  return Todo.deleteTodo(req, res);
});

module.exports = router;

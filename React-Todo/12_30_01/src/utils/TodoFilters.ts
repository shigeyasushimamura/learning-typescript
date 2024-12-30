import { Todo, Filter } from "../components/TodoList/types";

export const filterTodos = (todos: Todo[], filter: Filter) => {
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

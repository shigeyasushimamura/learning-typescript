import { useMemo, useCallback } from "react";
import styles from "./TodoList.module.css";
import { filterTodos } from "../../utils/TodoFilters";
import TodoListItem from "./TodoListItem";
import { Todo } from "./types";
import useTodo from "./useTodo";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const { state, dispatch } = useTodo();
  const filteredTodos = useMemo(
    () => filterTodos(state.todos, state.filter),
    [state.todos, state.filter]
  );

  const handleToggle = useCallback(
    (id: number) => {
      dispatch({ type: "TOGGLE_TODO", id });
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (id: number) => {
      dispatch({ type: "DELETE_TODO", id });
    },
    [dispatch]
  );

  return (
    <>
      <ul>
        {filteredTodos.map((todo: Todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodoForm />
    </>
  );
};
export default TodoList;

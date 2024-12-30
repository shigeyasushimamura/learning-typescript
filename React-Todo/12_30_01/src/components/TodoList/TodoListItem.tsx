import { memo, useMemo, useCallback } from "react";
import { Todo } from "./types";

const TodoListItem = memo(
  ({
    todo,
    onToggle,
    onDelete,
  }: {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
  }) => {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </li>
    );
  }
);
export default TodoListItem;

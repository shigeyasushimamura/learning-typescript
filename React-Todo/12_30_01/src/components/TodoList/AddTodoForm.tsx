import { useState } from "react";
import useTodo from "./useTodo";

const AddTodoForm = () => {
  const { dispatch } = useTodo();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", text: text.trim() });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTodoForm;

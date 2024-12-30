export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type Filter = "all" | "active" | "completed";

export interface TodoState {
  todos: Todo[];
  filter: Filter;
}

export type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number }
  | { type: "SET_FILTER"; filter: Filter };

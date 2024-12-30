import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./components/TodoList/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<TodoList />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </TodoProvider>
    </>
  );
}

export default App;

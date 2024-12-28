import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Basic1 from "./components/Basic1";
import MyBlog from "./components/MyBlog";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="myblog" element={<MyBlog />}></Route>
      </Routes>
    </>
  );
}

export default App;

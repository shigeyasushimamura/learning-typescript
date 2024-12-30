import ApiFetch from "./components/ApiFetch";
import "./App.css";
import Basic1 from "./components/Basic1";
import Basic2 from "./components/Basic2";
import MyBlog from "./components/MyBlog";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import AppContext from "./components/AppContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Basic1 />}></Route>
        <Route path="/basic2" element={<Basic2 />}></Route>
        <Route path="myblog" element={<MyBlog />}></Route>
        <Route path="/apifetch" element={<ApiFetch />}></Route>
        <Route path="/postDetail" element={<PostDetail />}></Route>
        <Route path="/context" element={<AppContext />}></Route>
      </Routes>
    </>
  );
}

export default App;

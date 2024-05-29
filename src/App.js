import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import Projects from './components/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}



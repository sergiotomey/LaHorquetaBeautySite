import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tratamientos from "./pages/Tratamientos";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/tratamientos" element={<Tratamientos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

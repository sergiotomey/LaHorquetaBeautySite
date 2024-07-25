import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Tratamientos from "./pages/Tratamientos";
import Home from "./pages/Home";
import QuienSomos from "./pages/QuienesSomos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/quiensomos" element={<QuienSomos />}></Route>
        <Route exact path="/contacto" element={<Contacto />}></Route>
        <Route exact path="/tratamientos" element={<Tratamientos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

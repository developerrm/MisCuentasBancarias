import { useState } from "react";
import { ListadoPersonas } from "./Pages/ListadoPersonas.jsx";
import { MisCuentas } from "./Pages/MisCuentas.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="contenedorApp">
        <div className="contenedorApp-glass">
          <BrowserRouter>
            <Routes>
              <Route path="/MisCuentasBancarias" />
              <Route
                path="/MisCuentasBancarias/listadoPersonas"
                element={<ListadoPersonas />}
              />
              <Route
                path="/MisCuentasBancarias/MisCuentas"
                element={<MisCuentas />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;

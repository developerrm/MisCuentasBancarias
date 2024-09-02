import "./ListadoPersonas.css";
import { useEffect, useState } from "react";
import CrudComponent from "../Controles/CrudComponent.jsx";

export function ListadoPersonas() {
  const [listadoPersonas, setListadoPersonas] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URLDB}/personas`, {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => setListadoPersonas(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="container-listadoPersonas">
        {listadoPersonas.map((persona) => {
          return (
            <div key={persona.personaid} className="container-Persona">
              <div className="container-logo-listadoPersonas">
                <img
                  className="logo-listadoPersonas"
                  src={`./public/vite.svg`}
                />
              </div>
              <div className="container-data-listadoPersonas">
                <CrudComponent />
                <div>{persona.nombre}</div>
                <div>{persona.cargo}</div>
                <br />
                <div>{persona.descripcion}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

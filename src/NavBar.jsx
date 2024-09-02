import { BsList } from "react-icons/bs";
function NavBar() {
  return (
    <>
      <div className="NavBar">
        <input type="checkbox" id="navbar-check" />
        <label htmlFor="navbar-check" className="navbar-check-button">
          <BsList />
        </label>
        <label className="label-logo">Forms</label>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="/listadoPersonas">
            <li>Personas</li>
          </a>
          <a href="/MisCuentas">
            <li>MIS CUENTAS</li>
          </a>
          <a href="#">
            <li>Salir</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default NavBar;

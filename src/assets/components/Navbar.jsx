import { Link } from "react-router-dom";


function Navbar() {

  return (
    <div>
      <nav className="navbar" >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Navbar;

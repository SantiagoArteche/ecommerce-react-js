import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { FaClover } from "react-icons/fa6";
import "/public/css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <p className="text-center bg-success fw-bold text-light m-0">
          Hasta 12 Cuotas Sin Interés!
        </p>

        <h1 className="title text-success bg-dark m-0 align-items-center d-flex justify-content-center my-2">
          <Link
            to="/"
            className="text-decoration-none d-flex align-items-center my-1"
          >
            <FaClover size="3.9rem" className="text-success" />
            <span className="text-light">OffStore</span>
          </Link>
        </h1>

        <ul className="list-unstyled d-flex flex-row flex-wrap justify-content-center align-items-center bg-success p-2 m-0 text-light navb">
          <Link to="/" className="bg-dark rounded p-2">
            Productos
          </Link>
          <Link to="/categoria/remeras" className="bg-dark rounded p-2">
            Remeras
          </Link>
          <Link to="/categoria/camperas" className="bg-dark rounded p-2">
            Camperas
          </Link>
          <Link to="/categoria/pantalones" className="bg-dark rounded p-2">
            Pantalones
          </Link>
          <Link to="/categoria/zapatillas" className="bg-dark rounded p-2">
            Zapatillas
          </Link>
          <Link to="/carrito" className="border-0 carrito">
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;

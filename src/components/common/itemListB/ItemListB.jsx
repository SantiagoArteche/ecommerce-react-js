import { Link } from "react-router-dom";
import "/public/css/ItemListB.css";

export const ItemListB = ({ products }) => {
  return (
    <div className="d-flex flex-column align-items-center border border-black rounded-3 tarjeta bg-dark text-light p-4">
      <img src={products.img} alt="" className=" mt-3 align-self-center" />
      <h2 className="fs-3 text-center">{products.nombre}</h2>
      <h3 className="fs-4">$ {products.precio}</h3>
      <div className="d-flex justify-content-around w-100">
        <Link
          to={`/detalleproducto/${products.id}`}
          className="fs-5 bg-success rounded-2 p-2 text-light details mb-3 border-2 border border-light"
        >
          Detalles del Producto
        </Link>
      </div>
    </div>
  );
};

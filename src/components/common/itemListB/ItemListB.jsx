import { Link } from "react-router-dom";
import "/public/css/ItemListB.css";

export const ItemListB = ({ products }) => {
  return (
    <div className="d-flex flex-column align-items-center border border-black rounded-3 tarjeta bg-dark text-light p-4">
      <img src={products.img} alt="" className="mt-3 align-self-center" />
      <h2 className="text-center">{products.nombre}</h2>
      <h3>$ {products.precio}</h3>
      <div className="d-flex justify-content-center">
        <Link
          to={`/detalleproducto/${products.id}`}
          className="bg-success rounded-2 p-2 text-light text-center details mb-3 border-2 border border-light detProduct"
        >
          Detalles del Producto
        </Link>
      </div>
    </div>
  );
};

import { ItemCount } from "../../common/itemCount/ItemCount";

export const ItemDetailContainer = ({
  product,
  agregarProducto,
  notify,
  cantidad,
}) => {
  return (
    <div className="d-flex flex-row itemDetailBox">
      <div className="d-flex justify-content-center my-5 px-5 col-8">
        <div className="d-flex flex-column align-items-center boxDetail border border-black rounded-3 bg-dark text-light p-4">
          <img
            src={product.img}
            alt=""
            className="mt-3 align-self-center mb-3"
          />
          <h2 className="text-center">{product.nombre}</h2>
          <h2>${product.precio}</h2>
          <ItemCount
            agregarProducto={agregarProducto}
            inicial={cantidad}
            product={product}
            notify={notify}
          />
          <p className="bg-success border-2 border border-light rounded-2 p-2">
            Stock disponible: {product.stock}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center text-center align-items-center">
        <h2 className="col-4 w-100 desc text-light ">{product.descripcion}</h2>
      </div>
    </div>
  );
};

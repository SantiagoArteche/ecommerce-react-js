import { ItemCount } from "../../common/itemCount/ItemCount";

export const ItemDetailPresentacional = ({ product, agregarProducto, notify, cantidad}) => {
  return (
    <div className="d-flex flex-row itemDetailBox">
      <div className="d-flex justify-content-center my-5 col-6">
        <div className="d-flex flex-column align-items-center border border-black rounded-3 bg-dark text-light p-4">
          <img
            src={product.img}
            alt=""
            className=" mt-3 align-self-center mb-3"
          />
          <h2 className="fs-2 text-center">{product.nombre}</h2>
          <h3 className="fs-2">$ {product.precio}</h3>
          <ItemCount  agregarProducto={agregarProducto} inicial={cantidad} product={product} notify={notify}/>
          <p className="fs-5 bg-success border-2 border border-light rounded-2 p-2">
            Stock disponible: {product.stock}
          </p>
        </div>
      </div>
      <div className="col-6 fs-1 text-light my-5 align-self-center">
        {product.descripcion}
      </div>
    </div>
  );
};

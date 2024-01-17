import { ToastContainer } from "react-toastify";
import { useCount } from "../../hooks/useCount";

export const ItemCount = ({
  agregarProducto,
  notify,
  product,
  inicial = 1,
}) => {
  const { count, sumar, restar } = useCount(inicial, product.stock);

  return (
    <>
      <div className="d-flex flex-row align-items-center">
        <button
          className="me-3 bg-success text-light boxMinusMax border-2 border border-light rounded d-flex justify-content-center align-items-center"
          onClick={restar}
        >
          <p>-</p>
        </button>
        <p
          className="bg-success d-flex justify-content-center flex-nowrap rounded-2 p-2 me-3 mt-3 border-2 border border-light add mb-3"
          onClick={() => {
            agregarProducto(count), notify();
          }}
        >
          {`Añadir al carrito : ${count}`}
          <ToastContainer
            className="text-center line"
            position="top-right"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </p>
        <button
          className="bg-success text-light border-2 border border-light rounded boxMinusMax d-flex justify-content-center align-items-center"
          onClick={sumar}
        >
          <p>+</p>
        </button>
      </div>
    </>
  );
};

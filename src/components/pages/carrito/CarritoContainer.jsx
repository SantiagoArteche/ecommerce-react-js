import { Link } from "react-router-dom";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import swal from "sweetalert";

export const CarritoContainer = ({
  precioTotal,
  limpiarCarrito,
  limpiarProducto,
  cart,
}) => {
  return cart.length === 0 ? (
    <div className="d-flex emptyCart flex-column justify-content-center align-items-center text-light vacio">
      <h1>Su carrito esta vacio!</h1>
      <h2 className="mb-5 text-center">
        Busque productos para seguir comprando!
      </h2>
      <Link className="text-decoration-none text-light" to="/">
        <h2 className="bg-success rounded p-2 text-uppercase p-4">
          Elegir productos
        </h2>
      </Link>
    </div>
  ) : (
    <>
      <div className="container-fluid d-flex flex-row cart">
        <div className="col-7 vacio my-4 border-5 d-flex flex-column  align-items-center border-end border-success ">
          {cart.map((el) => {
            return (
              <div
                key={el.id}
                className="d-flex mb-5  bg-success  rounded p-0 text-light text-center mx-2 cardCartContainer gap-2"
              >
                <img src={el.img} alt="" className="rounded ms-0" />
                <div className="d-flex flex-wrap cardCart justify-content-center align-items-center">
                  <h4 className="text-center bg-dark rounded p-2">
                    {el.nombre}
                  </h4>
                  <h4 className="bg-dark text-center rounded p-2">
                    Precio: ${el.precio}
                  </h4>
                  <h4 className="bg-dark text-center rounded p-2">
                    Cantidad: {el.cantidad}
                  </h4>
                  <h4 className="bg-dark text-center rounded p-2 me-1">
                    Precio final: ${el.precio * el.cantidad}
                  </h4>
                  <DeleteForeverSharpIcon
                    sx={{ fontSize: { xs: 35, md: 45, lg: 55 } }}
                    className="mb-2 delete text-end"
                    onClick={() => {
                      swal({
                        title: "Estas por borrar este producto del carrito",
                        text: "Estas seguro?",
                        icon: "warning",
                        buttons: { cancel: "Cancelar", confirm: "OK" },
                        dangerMode: true,
                      }).then((confirmed) => {
                        if (confirmed) {
                          swal({
                            title: "Tu producto fue borrado!",
                            icon: "success",
                          });
                          limpiarProducto(el.id);
                        }
                      });
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-5 d-flex flex-column align-items-center check my-5 text-light">
          <div className="d-flex column align-items-center justify-content-around flex-column mx-3 checkB my-5">
            <h2 className="bg-success text-center p-3 rounded">
              Precio total de su compra : ${precioTotal()}
            </h2>

            <div className="d-flex vaciarFinalizar gap-3  text-light ">
              <h4
                className="bg-success text-center rounded p-3 delete "
                onClick={() => {
                  {
                    swal({
                      title: "Estas por vaciar el carrito",
                      text: "Estas seguro?",
                      icon: "warning",
                      buttons: { cancel: "Cancelar", confirm: "OK" },
                      dangerMode: true,
                    }).then((confirmed) => {
                      if (confirmed) {
                        swal({
                          title: "Carrito vaciado!",
                          icon: "success",
                        });
                        limpiarCarrito();
                      }
                    });
                  }
                }}
              >
                Vaciar el carrito
              </h4>
              <Link className="text-decoration-none" to="/checkout">
                <h4 className="text-light text-center bg-success p-3 rounded ">
                  Pasar a finalizar compra
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

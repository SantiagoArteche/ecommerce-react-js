import { Link } from "react-router-dom";
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import swal from 'sweetalert';

export const CarritoPresentacional = ({precioTotal, limpiarCarrito, limpiarProducto, cart}) => {

return cart.length === 0 ? <div className="d-flex flex-column justify-content-center align-items-center text-light vacio">
  <h1>Su carrito esta vacio!</h1>
  <h3 className="mb-5">Busque productos para seguir comprando!</h3>
  <Link className="text-decoration-none text-light" to="/"><h2 className="bg-success rounded p-2 text-uppercase p-4">Elegir productos</h2></Link></div>
  : (
    <>
    <div className="container-fluid d-flex flex-row cart">
    <div className="col-7 vacio">
    {cart.map(el=>{
      return(
      <div key={el.id} className="d-flex flex-row justify-content-between align-items-center mb-3 bg-success rounded p-0 text-light text-center">
      <img src={el.img} alt="" className="rounded ms-0"/>
      <h4 className="text-center bg-dark rounded p-2">{el.nombre}</h4>
      <h4 className="bg-dark rounded p-2">Precio: ${el.precio}</h4>
      <h4 className="bg-dark rounded p-2">Cantidad: {el.cantidad}</h4>
      <h4 className="bg-dark rounded p-2 me-2">Precio final: ${el.precio * el.cantidad}</h4>
      <DeleteForeverSharpIcon sx={ {fontSize: 55}} className="mb-2 delete text-end" onClick={ ()=> {swal({
  title: "Estas por borrar este producto del carrito",
  text: "Estas seguro?",
  icon: "warning",
  buttons: {cancel: "Cancelar", confirm:"OK"},
  dangerMode: true,
})
.then((confirmed) => {
  if (confirmed) {
    swal( {
      title: "Tu producto fue borrado!",
      icon: "success",
    });
    limpiarProducto(el.id)
  }
});
}}/>

      </div>)
        
      })}
      </div> 
      <div className="col-5 d-flex flex-column align-items-end check my-5">
      
      <div className="d-flex column align-items-center justify-content-around flex-column mx-3 checkB my-5">
      <h2 className="text-light text-center  text-center text-light bg-success p-2 rounded">Precio total de su compra : ${precioTotal()}</h2>
     
      <div className="d-flex flex-row justify-content-between text-light ">
      <h3 className="text-light bg-success rounded p-3 text-center delete me-3" onClick={()=>{{swal({
  title: "Estas por vaciar el carrito",
  text: "Estas seguro?",
  icon: "warning",
  buttons: {cancel: "Cancelar", confirm:"OK"},
  dangerMode: true,
})
.then((confirmed) => {
  if (confirmed) {
    swal( {
      title: "Carrito vaciado!",
      icon: "success",

    });
    limpiarCarrito()
   
  }
});
}}}>Vaciar el carrito</h3>
      <Link className="text-decoration-none ms-3" to="/checkout"><h3 className="text-center text-light bg-success p-3 rounded">Pasar a finalizar compra</h3></Link></div>
      </div>
      </div>
      </div>
      </>
  );
  
}


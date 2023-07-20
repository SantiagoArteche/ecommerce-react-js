import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { MoonLoader } from "react-spinners";
import { CartContext } from "../../../context/CartContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaClover } from "react-icons/fa6";
import "/public/css/ItemDetail.css";

export const ItemDetail = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const { id } = useParams();
  const { agregarAlCarrito, obtenerCantidad} = useContext(CartContext);

  
  const notify = () => {
    toast.success('Producto añadido al carrito!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const agregarProducto = (cantidad) =>{
    let data = {
    ...itemDetails,
    cantidad: cantidad,
  }
  agregarAlCarrito(data)
}

const cantidad = obtenerCantidad(id)


  useEffect(() => {
    let coleccion = collection(db, "products");
    let refDoc = doc(coleccion, id);
    getDoc(refDoc).then((res) => {
      setItemDetails({
        id: res.id,
        ...res.data(),
      });
    });
  }, [id]);
  

  return itemDetails.nombre ? (
    itemDetails.stock === 0 ? <h1 className="text-center text-light mt-5">No hay stock de este producto!</h1> : <ItemDetailContainer product={itemDetails} agregarProducto={agregarProducto} cantidad={cantidad} notify={notify}/>
  ) : (
    <div className="d-flex justify-content-center flex-column charge align-items-center">
      <FaClover size="8.9rem" className="text-success"/>
      <h1 className="text-light mb-5">OffStore</h1>
      <MoonLoader color="#FFFFFF" size={120} speedMultiplier={0.8} />
    </div>
  );
};

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { CarritoPresentacional } from "./CarritoPresentacional";
import "/public/css/Carrito.css";

export const Carrito = () => {
const { cart, limpiarCarrito, limpiarProducto, precioTotal } = useContext(CartContext)

return <CarritoPresentacional cart={cart} limpiarCarrito={limpiarCarrito} limpiarProducto={limpiarProducto} precioTotal={precioTotal} />
};


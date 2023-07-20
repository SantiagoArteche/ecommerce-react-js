import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

        
    const [cart, setCart] = useState( [] )
    
    const agregarAlCarrito = (producto) => {
    let existe = enElCarrito(producto.id)
        if(existe){
            let newArray = cart.map(product=>{
                if(product.id === producto.id){
                    return {
                        ...product,
                        cantidad: producto.cantidad
                    }
                }else{
                    return product
                }
            })
            setCart(newArray) 
        }else{
            setCart([...cart, producto]); 
        }
    }

    const limpiarCarrito = () => {
        
        setCart( [] )
    }
    const limpiarProducto = (id) => {
      
        let arrayB = cart.filter( (prod) => prod.id !== id)
        setCart( arrayB )  
    }
    
    const enElCarrito = (id) =>{
        let existe = cart.some( (el) => el.id === id)
        return existe
        
        
        
    }
    const obtenerCantidad = (id) => {
        let elemento = cart.find(el=> el.id === id)
        return elemento?.cantidad
    }
    const precioTotal = () => {
       let total = cart.reduce(( acum , prod) => {
        return (prod.precio * prod.cantidad ) + acum },0)
        return total
    }
    let data = {
        cart,
        agregarAlCarrito,
        limpiarCarrito,
        limpiarProducto,
        obtenerCantidad,
        precioTotal
    }
    
  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

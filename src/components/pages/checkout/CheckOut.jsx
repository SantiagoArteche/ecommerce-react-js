import { useFormik } from "formik"
import * as Yup from "yup"
import { CheckOutContainer } from "./CheckOutPresentacional"
import {collection, addDoc} from "firebase/firestore"
import { db } from "../../../firebaseConfig"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom"
import "/public/css/CheckOut.css"

export const CheckOut = () => {

  const {cart, precioTotal, limpiarCarrito} = useContext( CartContext )
  const [ordenId, setOrdenId] = useState(null)
  const [precioCheckOut, setPrecioCheckOut] = useState(0)
  const {handleSubmit, handleChange, errors} = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: ""
    },
    onSubmit: ( data )=>{
      let orden = {
        comprador: data,
        objetos: cart,
        total: precioTotal()
      }

      let coleccionDeOrdenes = collection(db, "ordenes")
      addDoc(coleccionDeOrdenes, orden). then(res=> {
        setOrdenId(res.id)
        setPrecioCheckOut(precioTotal())
      }).then(()=>{
        limpiarCarrito()
      })
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required("Falta completar este campo").min(3, "El campo debe contener al menos 3 caracteres"),
      email: Yup.string().email("Ingreso incorrecto, debe ingresar el email").required("Falta completar este campo"),
      telefono: Yup.string().required("Falta completar este campo").min(10, "Ingresar telefonos provenientes de Argentina")
    })
  })
 
  return (
    <>
      {ordenId ?  
      <div className="containerComp d-flex flex-column justify-content-around">
      <h1 className="text-center text-light ordenComp d-flex align-self-center bg-success p-2 rounded">Felicitaciones! has realizado tu compra por un total de {precioCheckOut}!</h1>
      <h1 className="text-center text-light ordenComp align-self-center bg-success rounded p-2">Tu codigo de compra es: <span className="text-dark">{ordenId}</span></h1>
      <Link className="align-self-center bg-success linkCheck text-light text-center text-decoration-none rounded p-2 fs-2 fw-bold"  to="/">Volver al inicio</Link></div> : (
    <CheckOutContainer handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} TextField={TextField} Button={Button}/>
      )}
      </>
  )
}


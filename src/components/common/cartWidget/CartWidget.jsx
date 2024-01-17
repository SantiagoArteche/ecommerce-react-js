import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="d-flex flex-row align-items-center">
      <ShoppingCartIcon
        className="carrito"
        color="action"
        sx={{ fontSize: { xs: 45, sm: 50, md: 55 } }}
      />
      <p className="fs-3 m-0 ">
        {cart.reduce((acum, el) => acum + el.cantidad, 0)}
      </p>
    </div>
  );
};

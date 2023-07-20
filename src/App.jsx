import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./components/layout/Layout";
import { rutas } from "./rutas";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>    
            <Route element={<Layout />}>
              {rutas.map(({id, path, Element})=> <Route key={id} path={path} element={<Element/>} />)}
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

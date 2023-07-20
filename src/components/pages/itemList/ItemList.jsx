import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemListContainer } from "./ItemListContainer";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { MoonLoader } from "react-spinners";
import { FaClover } from "react-icons/fa6";
import "/public/css/ItemList.css"

export const ItemList = () => {
  const [product, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    let coleccion = collection(db, "products");
    let consulta;
    if (!categoria) {
      consulta = coleccion;
    } else {
      consulta = query(coleccion, where("categoria", "==", categoria));
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((el) => {
          return {
            ...el.data(),
            id: el.id,
          };
        });
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, [categoria]);

  return product.length === 0 ? (
    <div className="d-flex justify-content-center flex-column charge align-items-center">
      <FaClover size="8.9rem" className="text-success"/>
      <h1 className="text-light mb-5">OffStore</h1>
      <MoonLoader color="#FFFFFF" size={120} speedMultiplier={0.8} />
    </div>
  ) : (
    <ItemListContainer productos={product} />
  );
};

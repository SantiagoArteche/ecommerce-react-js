import { ItemListB } from "../../common/itemListB/ItemListB";

export const ItemListContainer = ({ productos }) => {
  return (
    <div>
      <div className="d-flex flex-row flex-wrap align-items-center containerTarjeta my-5 container-fluid justify-content-center">
        {productos.map((prod) => (
          <ItemListB key={prod.id} products={prod} />
        ))}
      </div>
    </div>
  );
};

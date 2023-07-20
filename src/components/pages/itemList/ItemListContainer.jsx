import { ItemListB } from "../../common/itemListB/ItemListB";

export const ItemListContainer = ({ productos }) => {
  return (
    <div>
      <div className="d-flex flex-row flex-wrap align-items-center containerTarjeta container-fluid justify-content-center mb-3">
        {productos.map((prod) => (
          <ItemListB key={prod.id} products={prod} />
        ))}
      </div>
    </div>
  );
};

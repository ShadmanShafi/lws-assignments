import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const inventoryItem = useSelector((state) => state.inventoryItem);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
      {}
      <ProductItem
        id={inventoryItem[0].id}
        name={inventoryItem[0].name}
        quantity={inventoryItem[0].quantity}
        price={`Tk ${inventoryItem[0].price
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
      />
      <ProductItem
        id={inventoryItem[1].id}
        name={inventoryItem[1].name}
        quantity={inventoryItem[1].quantity}
        price={`Tk ${inventoryItem[1].price
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
      />
      <ProductItem
        id={inventoryItem[2].id}
        name={inventoryItem[2].name}
        quantity={inventoryItem[2].quantity}
        price={`Tk ${inventoryItem[2].price
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
      />
    </div>
  );
}

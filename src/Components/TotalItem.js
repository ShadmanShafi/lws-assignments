import { useSelector } from "react-redux";

export default function TotalItem() {
  const cartItems = useSelector((state) => state.cartItem);
  let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>Total Item</p>
        <p className="text-5xl">{totalItems}</p>
      </div>
    </div>
  );
}

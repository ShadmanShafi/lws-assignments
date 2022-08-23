import { useSelector } from "react-redux";

export default function TotalPrice() {
  const cartItems = useSelector((state) => state.cartItem);
  let totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="flex justify-center items-center text-center">
      <div className="text-xl font-semibold">
        <p>Total Price</p>
        <p className="text-5xl">{`Tk ${totalPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</p>
      </div>
    </div>
  );
}

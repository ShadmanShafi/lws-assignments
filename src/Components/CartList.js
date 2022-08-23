import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalItem from "./TotalItem";
import TotalPrice from "./TotalPrice";

export default function CartList() {
  const cartItems = useSelector((state) => state.cartItem);

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {cartItems.map((item) => 
          // {item.quantity && <CartItem id={item.id} name={item.name} quantity={item.quantity} price={item.price}/>}
          <CartItem id={item.id} name={item.name} quantity={item.quantity} price={item.price}/>
        )}
        <TotalItem quantity="0" />
      </div>
      <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <TotalPrice price="0" />
      </div>
    </div>
  );
}

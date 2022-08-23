import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Redux/CartItem/actions";
import { increment, decrement } from "../Redux/InventoryItem/actions";

export default function CartItem(props) {
  const dispatch = useDispatch();

  const addButtonHandler = () => {
    dispatch(addItem(props.id, props.name, props.quantity, props.price));
    dispatch(decrement(props.id));
  };

  const removeButtonHandler = () => {
    dispatch(removeItem(props.id, props.name, props.quantity, props.price));
    dispatch(increment(props.id));
  };

  return (
    <div className="flex justify-between border-b-2 mb-2">
      <div className="text-lg py-2">
        <p>{props.name}</p>
      </div>
      <div className="text-lg py-2">
        <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
          <button
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
            onClick={removeButtonHandler}
            disable={false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </button>
          <p>{props.quantity}</p>
          <button
            className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
            onClick={addButtonHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

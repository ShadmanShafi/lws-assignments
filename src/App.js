
import { Provider } from "react-redux";
import CartList from "./Components/CartList";
import ProductList from "./Components/ProductList";
import Title from "./Components/Title";
import store from "./Redux/store"

export default function App() {
  return (
    <Provider store={store}>
    <div className="bg-gray-50 h-full md:h-screen">
      <Title name="Shopping Cart" />
      <div className="grid grid-cols-12 gap-6">
        <ProductList />
        <CartList />
      </div>
    </div>
    </Provider>
  );
}

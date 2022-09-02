import { Provider } from "react-redux";
import store from "./Redux/store";
import CardGrid from "./Components/CardGrid";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Search />
          <section className="relative pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
            <div className="relative max-w-7xl mx-auto"></div>
            <Header />
            <CardGrid />
          </section>
        </Layout>
      </Provider>
    </>
  );
}

export default App;

import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";
import { useGetGoodsQuery } from "./redux/goodsApi";

const App = () => {
  const { data = [], isLoading } = useGetGoodsQuery();

  return (
    <div className="container">
      <h1>RTK Query</h1>

      <AddProduct />

      {
        isLoading
          ? <h3>Loading...</h3>
          : <ProductsList data={ data } />
      }
    </div>
  );
}

export default App;


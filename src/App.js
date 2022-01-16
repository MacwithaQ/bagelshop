import "./App.css";
import products from "./products.js";
import Home from "./components/Home.js";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Home />
      {products.reverse().map((element) => (
        <ProductList product={element} />
      ))}
      {/* <ProductList product={products[1]} />
      <ProductList product={products[0]} /> */}
    </div>
  );
}

export default App;

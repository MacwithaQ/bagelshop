import './App.css';
import products from './products.js'
import Home from './Home.js'
import ProductList from './ProductList';


function App() {
  return (
    <div className="App">
      <Home />
      <ProductList product= {products[1]}/>
      <ProductList product= {products[0]}/>
    </div>
  
    
  );
}

export default App;

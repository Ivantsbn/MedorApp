import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="App">
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;

import './App.css';
import { useState } from 'react';
import Form from './Components/Form'
import CardList from './Components/CardList';
function App() {
  const[products,setProducts]=useState([])
  const addProduct=(product)=>{
    setProducts([...products, product])
    console.log(product);
  };
  return (
    <div className="Main">
      <Form addProduct={addProduct}></Form>
      <CardList list={products}></CardList>
    </div>
  );
} 

export default App;

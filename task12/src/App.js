import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import Errors from './components/Errors/Errors';
import Table from './components/Table/Table';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { eraseError } from './slices/errorSlice';
function App() {
  const[products,setProducts]=useState([])
  const addProduct=(product)=>{
    setProducts([...products, product])
  };

  return (
    <div className="App">
      <Errors></Errors>
      <Form addProduct={addProduct}></Form>
      <Table list={products}></Table>
    </div>
  );
}

export default App;

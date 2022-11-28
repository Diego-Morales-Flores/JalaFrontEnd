import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import insertionSort from './utils/InsertionSort'

function App() {
  const [count, setCount] = useState(0)
  const [myArray, setMyArray] = useState([7,8,5,2,4,6,3,1,4])
  
  function insertionSort() {
    let internalArray=myArray
    let key
    let j
    for (let i = 0; i < internalArray.length; i++) {
        key=internalArray[i]
        j=i-1
        while(j>=0 && internalArray[j]>key){
          internalArray[j+1]=internalArray[j]
          console.log("y "+internalArray);
          j=j-1
        }
        internalArray[j+1]=key      
        console.log("x "+internalArray);
     }
  }
  insertionSort()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

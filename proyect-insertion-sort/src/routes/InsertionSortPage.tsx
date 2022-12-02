import { Paper } from "@mui/material";
import { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import List from "../components/List";
import "./InsertionSortPage.css"

export default function InsertionSortPage() {
  const [myArray, setMyArray] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<number>(0);
  const [key, setKey]=useState(-1);
  const [key2, setKey2]=useState(-1);
  const [key3, setKey3]=useState(0);


  const insertionSort = async() => {
    let internalArray: number[] = clean(myArray);
    let j;
    let k;
    for (let i = 0; i < internalArray.length; i++) {
      k=internalArray[i];
      setKey(i)
      setKey3(internalArray[i])
      j = i - 1;
      setKey2(j)
      while (j >= 0 && internalArray[j] > k) {
        internalArray[j + 1] = internalArray[j];
        await new Promise((r) => setTimeout(()=>r("isDone"),3000,));
        setMyArray([... internalArray])
        console.log("y " + internalArray);
        j = j - 1;
        setKey2(j+1)
      }
      internalArray[j + 1] = k;
      await new Promise((r) => setTimeout(()=>r("isDone"),3000,));
      setMyArray([... internalArray])
      console.log("x " + internalArray);
    }
    await new Promise((r) => setTimeout(()=>r("isDone"),1000,));
    setMyArray([... internalArray])
    console.log("SOrted " + myArray);
  };  

  useEffect(() => {
    console.log(key);
}, [key]);

  const clean = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
      array[i] = Number(array[i]);
    }
    return array;
  };
  const addElement = (event: any) => {
    console.log("Child did Element:", event);
    if(inputValue<100){
    event.target.onclick(setMyArray([...myArray, Number(inputValue)]));
    }
    else{
      alert("Introduzca un numero menor a 100")
    }
    setKey(-1);
    console.log(myArray);
  };
  const inputHandler = (event: any) => {
    console.log("Child did:", event);
    setInputValue(event.target.value);
  };

  const deleteHanderl=()=>{
    setMyArray([])
    setKey(-1);
    setKey2(-1);
    setKey3(0);
  }

  return (
    <div className="InsertionSortPage">
      <Paper  sx={{bgcolor: 'darkgray', 	typography: 'h4' }} className="paper">{key3}</Paper>
      <List array={myArray} keyValue={key} keyValue2={key2}/>
      <Input label="Insert a Number" onAction={inputHandler}></Input>
      <CustomButton name="Add the Number" callback={addElement}></CustomButton>
      <CustomButton name="Delete the List" callback={deleteHanderl}></CustomButton>
      <CustomButton name="Sort the List" callback={insertionSort}></CustomButton>
    </div>
  );
}

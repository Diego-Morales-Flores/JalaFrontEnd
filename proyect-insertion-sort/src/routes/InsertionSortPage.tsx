import { CleanHands } from "@mui/icons-material";
import { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import List from "../components/List";
export default function InsertionSortPage() {
  const [myArray, setMyArray] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<number>(0);
  const insertionSort = () => {
    let internalArray: number[] = clean(myArray);
    let key;
    let j;
    for (let i = 0; i < internalArray.length; i++) {
      key = internalArray[i];
      j = i - 1;
      while (j >= 0 && internalArray[j] > key) {
        internalArray[j + 1] = internalArray[j];
        console.log("y " + internalArray);
        j = j - 1;
      }
      internalArray[j + 1] = key;
      console.log("x " + internalArray);
    }
    setMyArray([... internalArray]);
    console.log("SOrted " + myArray);
  };
  useEffect(() => {
    insertionSort
  }, [myArray])
  

  const clean = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
      array[i] = Number(array[i]);
    }
    return array;
  };
  const addElement = (event: any) => {
    console.log("Child did Element:", event);
    event.target.onclick(setMyArray([...myArray, inputValue]));
    console.log(myArray);
  };
  const inputHandler = (event: any) => {
    console.log("Child did:", event);
    setInputValue(event.target.value);
  };
  return (
    <div>
      InsertionSortPage
      <List array={myArray} />
      <Input label="Insert the unsorted list" onAction={inputHandler}></Input>
      <CustomButton name="Add" callback={addElement}></CustomButton>
      <CustomButton name="Sort" callback={insertionSort}></CustomButton>
    </div>
  );
}

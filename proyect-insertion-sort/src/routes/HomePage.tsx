import React from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const toInsertionSortPage=()=>{
    navigate("/InsertionSort")
  }
  return (
    <div>HomePage
    <CustomButton name="Let's Started" callback={toInsertionSortPage}/>
    </div>
  )
}

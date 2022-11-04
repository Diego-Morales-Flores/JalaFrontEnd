import React from 'react'
import './Form.css'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import { addError } from '../../slices/errorSlice';
import { useEffect } from 'react';
export default function Form(props) {
const { register, setError , handleSubmit, formState: { errors }, reset } = useForm();
const onSubmit = data => {
  props.addProduct(data)
  reset()
};
const dispatch =useDispatch();

const setErrorFromStore = ()=>{
    if(errors.name&&errors.age){
      dispatch(addError({
        errorName: errors.name.message,
        errorAge: errors.age.message
      }))
    }
    else if(errors.name){
      dispatch(addError({
        errorName: errors.name.message,
        errorAge: ""
      }))
    }
    else if(errors.age){
      dispatch(addError({
        errorName: "",
        errorAge: errors.age.message
      }))
    }
}
  return (
   <form className='Form' onSubmit={handleSubmit(onSubmit, setErrorFromStore)}>
    <label htmlFor="name">Name</label >
    {errors.name && <p className='Alert'>{errors.name.message}</p>}
    <input type="text" name='name' {...register('name', {
      required: 'This file is Required Name', 
      maxLength :{value:8, message:"Too Long"},
      minLength :{value:3, message:"Too Short"}
    })
    }/>
    <label htmlFor="age">Age</label>
    {errors.age && <p className='Alert'>{errors.age.message}</p>}
    <input type="text" name='age' {...register('age', {
      required:'This file is Required Age',
      max :{value:100, message:"Too Old"},
      min :{value:18, message:"Too Young"}
      })}/>
    <input type="submit" value="Submit"/>
   </form>
  )
}

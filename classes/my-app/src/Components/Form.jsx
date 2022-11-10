import React from 'react'
import './Form.css';
import {useForm} from 'react-hook-form'
export default function Form(props) {
const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
const onSubmit = data => {
    props.addProduct(data)
    reset()
};
  return (
      <form className='ContainerMain' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' {...register('name', {required:true})}/>
         {errors.name && <p>This file is Required</p>}
        <label htmlFor="description">Descripton</label>
        <input type="text" name='description' {...register('description')}/>
        <label htmlFor="price">Price</label>
        <input type="text" name='price' {...register('price')}/>
        <input type="submit"/>
      </form>
  )
}
//name, desc, price
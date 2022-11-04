import {createSlice} from '@reduxjs/toolkit';

const initialState = [{
    errorName: "Diego",
    errorAge: "26"
}]
const errorSlice = createSlice({
    name:"error",
    initialState,
    reducers:{
        addError : (state, action)=>{
            state.push({
                errorName : action.payload.errorName,
                errorAge : action.payload.errorAge
            })  
        },
        eraseError : (state)=>{
            state.shift()
        } 
    }
})

//export const addError = createAction(ADD_ERROR)
export const {addError, eraseError} = errorSlice.actions;
export default errorSlice.reducer
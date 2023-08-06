import React ,{useEffect, useState} from 'react'
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';



const initialState ={
    loading:false,
    content: [],
    error: '',
}
export const fetchdata = createAsyncThunk('product/fetchdata', ()=>{
    return axios 
    .get('https://fakestoreapi.com/products')
    .then((response)=> response.data)


   
})






const ProductSlice = createSlice({
    name:"product",
   initialState,
   reducers:{
   
     addnewproduct: {
        reducer(state, action ){
            state.content.push(action.payload)

        },
        prepare(newproduct){
            return {payload:{...newproduct, id: uuidv4()}}
        }
     }

   },
    extraReducers:builder =>{
        builder.addCase(fetchdata.pending, state=>{
            state.loading = true
        })
        builder.addCase(fetchdata.fulfilled , (state,action)=>{
            state.loading= false
            state.content = action.payload
            state.error= ''
        })
        builder.addCase(fetchdata.rejected , (state, action)=>{
            state.loading= false
            state.content = []
            state.error = action.error.message
        })
    }
})
export default ProductSlice.reducer;
export const {addnewproduct} = ProductSlice.actions



import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    id:"",
    content:[]
        
    ,
    loading:false,
}
export const getdata = createAsyncThunk('product/getdata', (id)=>{
    return axios 
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response)=> response.data)


   
})

const ProductdetailsSlice= createSlice({
    name:"productdetail",
    initialState,
    reducers:{
        
     
        updateid(state, action){
            return void(state.id = action.payload)
        }
    },
    extraReducers:builder =>{
        builder.addCase(getdata.pending, state=>{
            state.loading = true
        })
        builder.addCase(getdata.fulfilled , (state,action)=>{
            state.loading= false
            let arr = [action.payload]
            state.content = arr
            state.error= ''
        })
        builder.addCase(getdata.rejected , (state, action)=>{
            state.loading= false
            state.content = []
            state.error = action.error.message
        })

    }
    

})
export default ProductdetailsSlice.reducer;
export const { updateid} = ProductdetailsSlice.actions;
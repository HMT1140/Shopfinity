
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

 const initialState = {
    totalprice:0,
    quantity:0,
    content:[]
 }
 export const dataget = createAsyncThunk('product/dataget', (id)=>{
    return axios 
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response)=> response.data)


   
})
const ShoppingcartSlice = createSlice({
    name:"shoppingcart",
    initialState,
    reducers:{
       additemtocart(state,action){
        const existingProduct = state.content.find((product)=>product.id===action.payload.id)
        if (existingProduct) {
            
            existingProduct.quantity += action.payload.quantity;
          } else {
           
            state.content.push(action.payload);
          }
       },
       updatequantity(state,action){
        
        return void(state.quantity = action.payload)
       },
       updatetotalprice(state, action){
        return void(state.totalprice = action.payload)
       },
       removeitemfromcart(state, action){
       state.content =state.content.filter((product)=>product.id!== action.payload)
       
      
        
            
        
}


    },
    extraReducers:builder =>{
        builder.addCase(dataget.pending, state=>{
            
        })
        builder.addCase(dataget.fulfilled , (state,action)=>{
           
           let arr = [action.payload]
           
            return void(state.content.push(arr))
            
        })
        builder.addCase(dataget.rejected , (state, action)=>{
          
            state.content = []
            
        })
    }
})
export default ShoppingcartSlice.reducer;
export const {additemtocart,updatequantity,updatetotalprice,removeitemfromcart} = ShoppingcartSlice.actions
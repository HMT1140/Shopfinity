import { createSlice } from "@reduxjs/toolkit";




const fetchproductdata= async()=>{
   
    const url = 'https://fakestoreapi.com/products';
    const data = await fetch(url)
    const parseddata= await data.json();
    
}



const ProductSlice = createSlice({
    name:"product",
    initialState:{},
    reducers:{
        updateproducts:(state, action)=>{
            return 
        }
    }
})
export default ProductSlice.reducer;
export const {updateproducts} = ProductSlice.actions

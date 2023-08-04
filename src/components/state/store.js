import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/ProductSlice";
import ProductdetailsReducer from "../features/ProductdetailsSlice";


const store = configureStore({
    reducer:{
        product: ProductReducer,
        productdetail: ProductdetailsReducer
    }
})
export default store
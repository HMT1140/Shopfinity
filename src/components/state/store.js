import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/ProductSlice";
import ProductdetailsReducer from "../features/ProductdetailsSlice";
import ShoppingcartReducer from "../features/ShoppingCartSlice"


const store = configureStore({
    reducer:{
        product: ProductReducer,
        productdetail: ProductdetailsReducer,
        shoppingcart: ShoppingcartReducer,
    }
})
export default store
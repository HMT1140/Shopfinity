import { createSlice } from "@reduxjs/toolkit";
import {useState} from 'react';

const [productdata, setproductdata] = useState([])

const fetchproductdata= async()=>{
    const url = 'https://fakestoreapi.com/products';
    const data = await fetch(url)
    const parseddata= await data.json();
    setproductdata(parseddata)
    }
    


const ProductSlice = createSlice({
    name:"product",
    initialState:productdata,
    reducers:{
        updateproducts:(state, action)=>{
            return 
        }
    }
})
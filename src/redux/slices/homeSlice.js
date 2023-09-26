import { createSlice } from "@reduxjs/toolkit";
import {categories} from '../../data/categories'
import { products } from "../../data/products";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        allCategories: categories,
        allProducts: products,
    },
    reducers: {}
})

export const {setCategory} = homeSlice.actions

export default homeSlice.reducer;
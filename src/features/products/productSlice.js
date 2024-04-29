import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../data"

const initialState = {
    products: allProducts,
    total: 0,
    price: 0,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        increaseAmount: (state, {payload}) => {
            const item = state.products.find((product) => {
                return product.id == payload;
            })

            item.amount +=1;
            productsSlice.caseReducers.calculateTotal(state)
        },
        decreaseAmount: (state, {payload}) => {
            const item = state.products.find((product) => {
                return product.id == payload;
            })

            item.amount -=1;
            productsSlice.caseReducers.calculateTotal(state)
        },
        removeItem: (state, {payload}) => {
            state.products = state.products.filter((item) => item.id !== payload)
        },
        calculateTotal: (state) => {
            let price = 0;
            let total = 0;

            state.products.forEach((product) => {
                total = total + product.amount;
                price = price + product.amount * product.price;
            });
            state.price = price;
            state.total = total;
        },
    },
});

export const { increaseAmount, decreaseAmount, removeItem, calculateTotal } = productsSlice.actions;
export default productsSlice.reducer;
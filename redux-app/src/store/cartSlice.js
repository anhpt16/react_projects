import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add: (state, action) => {
            state.cartList = state.cartList.concat(action.payload);
            state.total += action.payload.price;
        },
        remove: (state, action) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload.id);
            state.total -= action.payload.price;
        },
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer; 
import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/stroge";

const initialState = loadState ('product') ||  {
    products: [],
    count: 0,
    totalPrice: 0
}



const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        totalPrice:(state)=>{
      const  count =state.products.reduce((a,b)=>{
        return a+b.userPrice;
       },0);
       return {...state,totalPrice:count}
        },
        setCount:(state)=>{
      const  count =state.products.reduce((a,b)=>{
        return a+b.userCount;
       },0);
       return {...state,count:count}
        },


        add: (state, action) => {
            const idf = state.products.find((item) => item.id === action.payload.id)
            if (!idf) {
                return { ...state, products: [...state.products, { ...action.payload, userCount: 1, userPrice: action.payload.price }] }
            }
            return state
        },
        remove: (state, action) => { 

            return {...state, products: state.products.filter((item)=>item.id !== action.payload.id)}
        },
        toggleAnmount: (state, action) => {
            if (action.payload.type === "add") {
                const newProducts = state.products.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount + 1,
                            userPrice: (item.userCount + 1) * item.price
                        }
                    }
                    return item
                })
                return { ...state, products: newProducts }
            }
            if (action.payload.type === "remove") {
                const newProducts = state.products.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount - 1,
                            userPrice: (item.userCount - 1) * item.price
                        }
                    }
                    return item
                })
                return { ...state, products: newProducts }
            }
        }
    }
})

export const productReducer = product.reducer
export const { add, remove, toggleAnmount,totalPrice,setCount } = product.actions
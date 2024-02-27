import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/product-reducer";
import { saveState } from "../config/stroge";
import { storegeMiddlware } from "./reducer/middilware";

export const store = configureStore({
    reducer:{
     product:productReducer
    },
   middleware:(defauldMiddlware)=>defauldMiddlware().prepend(storegeMiddlware.middleware)

})

store.subscribe(()=>{
saveState("product", store.getState().product)
})
import { add,remove, toggleAnmount,totalPrice,setCount } from "./product-reducer";
import {createListenerMiddleware,isAnyOf } from "@reduxjs/toolkit";

const storegeMiddlware =  createListenerMiddleware();
  storegeMiddlware.startListening({
    matcher:isAnyOf(add,remove,toggleAnmount),
    effect:(_,api)=>{
        api.dispatch(totalPrice());
        api.dispatch(setCount())
    }
});

export {storegeMiddlware}
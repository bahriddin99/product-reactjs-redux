import React from "react";
import { Modal } from "../../componets/modal/modal";
import {  useSelector } from "react-redux";
import { StoreCard } from "../store-card";


export const ProductContainer = () => {
  let [isOpen, setIsOpen] = React.useState(false);
  const {products,totalPrice,count} = useSelector((state)=>state.product)
  
  return (
    <>
    
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-500 py-1 px-2 rounded-md text-white mt-5"
      >
        open
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <span className="font-bold"> Maxsulotlat soni:{count}</span>
      <h1 className="text-3xl">{totalPrice}$</h1>
     {products.map((item)=>(
        <StoreCard key={item.id} {...item}/>
     ))}
      </Modal>
    </>
  );
};

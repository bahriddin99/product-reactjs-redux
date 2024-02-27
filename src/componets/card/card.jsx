import React from 'react'
import { add } from '../../redux/reducer/product-reducer'
import { useDispatch } from 'react-redux'

export const Card = (product) => {
  const dispatch = useDispatch()

  const addProduct = ()=>{
    dispatch(add(product))
  }
  return (
    <div className='border border-emerald-950 overflow-hidden rounded-2xl'>
        <div className='w-[300px] h-[300px]'>
            <img src={product.img} alt="img" />
        </div>
        <h1 className='text-4xl text-blue-500 text-center pb-3 font-bold'>{product.name}</h1>
        <strong className='container mb-2'>{product.price} $</strong>
        <button  onClick={addProduct}  className=' w-full bg-orange-400 font-bold py-2 '>Add</button>
    </div>
  )
}

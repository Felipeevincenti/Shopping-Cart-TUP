import React from 'react'

export default function ProductCard({ product, handleAddCart, handleRemoveCart }) {
    return (
        <div className='flex justify-between items-center bg-amber-50 p-5 my-2' key={product.code}>
            <p className='text-2xl'>{product.name}</p>
            <p>${product.price}</p>
            <div className='flex items-center gap-1'>
                <button onClick={() => handleAddCart(product)} className={product.isAvailable ? 'mx-1 w-[40px] h-[40px] text-white rounded-md bg-green-600 text-2xl cursor-pointer' : 'mx-1 w-[40px] h-[40px] text-white rounded-md bg-gray-500 text-2xl cursor-pointer'} disabled={product.isAvailable === true ? false : true}>+</button>
                <button onClick={() => handleRemoveCart(product)} className='mx-1 w-[40px] h-[40px] text-white rounded-md bg-red-700 text-2xl'>-</button>
            </div>
        </div>
    )
}
import React, { useState } from 'react'
import ProductCard from '../productCard/ProductCard';
import { allProducts } from '../../api/products.api';

export default function Products() {

    const [cart, setCart] = useState([]);

    const handleAddCart = (product) => {
        const productFind = cart.find((p) => p.code === product.code);

        if (!productFind) {
            setCart((prev) => [...prev, product]);
        };
    };

    const handleRemoveCart = (product) => {
        setCart((prev) =>
            prev.filter((p) => p.code !== product.code)
        );
    };

    const total = cart.reduce((acc, p) => acc + p.price, 0);

    return (
        <div className='flex'>
            <div className='gird grid-cols-1 w-[50%] m-5'>
                <h1 className='text-4xl my-5'>Lista</h1>
                {
                    allProducts.map((p) => (
                        <ProductCard key={p.code} product={p} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} />
                    ))
                }
            </div>
            <div className='gird grid-cols-1 w-[50%] m-5'>
                <h1 className='text-4xl my-5'>Carrito</h1>
                <div>
                    {
                        cart.map((p) => (
                            <ProductCard key={p.code} product={p} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} />
                        ))
                    }
                    <p className={cart.length === 0 ? 'hidden' : 'block'}>Precio total: {total}</p>
                </div>
                <button onClick={() => { setCart(() => []) }} disabled={cart.length ? false : true} className={cart.length ? 'py-1 px-2 text-white rounded-md bg-green-700' : 'py-1 px-2 text-white rounded-md bg-red-700'}>Comprar</button>
            </div>
        </div>
    )
}

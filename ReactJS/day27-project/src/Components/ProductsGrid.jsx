import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils.js';

const ProductsGrid = () => {

    const {products} = useLoaderData();

  return (
    <div className='pt-12 mb-5 lg:mb-8
     grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product)=>{
            const {title,image,price} = product.attributes;
            const IndianMoney = price;
            return(
                <Link key={product.id} to={`/products/${product.id}`} className=' card w-full shadow-xl hover:shadow-2xl transition duration-300' >
                <figure className='px-4 pt-4 '>
                    <img className='rounded-xl h-64 md:h-48 w-full object-cover' src={image} alt={title} />
                    </figure>   
                    <div className='mb-4 cart-body items-center text-center'>
                        <h2 className=' capitalize tracking-wider'>
                            {title}
                        </h2>
                        <span className='text-secondary'>
                            {formatPrice(IndianMoney)}
                        </span>
                        </div> 
                </Link>
            )
        })}
    </div>
  )
}

export default ProductsGrid
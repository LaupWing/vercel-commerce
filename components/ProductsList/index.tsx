import Image from 'next/image'
import React from 'react'
import PRODUCTS from '../../products'

const ProductsList = () => {
   const products = PRODUCTS
   return (
      <div className='mx-auto max-w-2xl w-full grid grid-cols-3 gap-2 my-10'>
         {products.map(product =>(
            <div className='flex flex-col'>
               <div 
                  className='bg-orange-100 relative'
                  style={{
                     paddingBottom: '90%'
                  }}
                  key={product.name}
               >
                  <Image
                     src={product.image}
                     layout='fill'
                     objectFit='cover'
                  />
               </div>
               <h2>{product.name}</h2>
               <p>{product.price}</p>
            </div>
         ))}
      </div>
   )
}

export default ProductsList
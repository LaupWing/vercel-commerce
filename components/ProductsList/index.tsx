import Image from 'next/image'
import React from 'react'
import PRODUCTS from '../../products'

const ProductsList = () => {
   const products = PRODUCTS
   return (
      <div className='mx-auto max-w-xl w-full grid grid-cols-3 gap-2 my-10'>
         {products.map(product =>(
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
                  objectFit='contain'
               />
               {product.name}
            </div>
         ))}
      </div>
   )
}

export default ProductsList
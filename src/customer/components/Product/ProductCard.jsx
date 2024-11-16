import React from 'react'
import "./ProductCard.css"
const ProductCard = () => {
  return (
    <div  className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
    <div className='h-[18rem]'>
        <img className='h-full w-full object-cover object-left-top' 
        src="https://rukminim2.flixcart.com/image/612/612/xif0q/top/q/r/e/xl-1-01-anopkala-creation-original-imah3xp2spatghvj.jpeg?q=70"  alt=""/>
    </div>
    <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>UniversalOutfit</p>
            <p>Casual Puff Sleeves Solid Women White Top</p>
        </div>
        <div className='flex items-center space-x-2'>
                <p className='font-semibold'>₹476</p>
                <p className='line-through opacity-50'>₹999</p>
                <p className='text-green-600 font-semibold'>50% off</p>
        </div>
    </div>

    </div>
  )
}

export default ProductCard

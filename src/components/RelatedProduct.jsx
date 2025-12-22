import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "./Title"
import ProductItem from './ProductItem'
   // used category and sub category because to show the same type product like for female it will show female related and for men mens related as well as kid

const RelatedProduct = ({category , subCategory}) => {
    const {products} = useContext(ShopContext);
    const[related , setRelated] =  useState([]);

    useEffect(()=>{
    //   logic for adding related products....
        if (products.length > 0 ) {
             
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=> category === item.category)
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5)); // load 5 related products
        }
    },[products])
  return (
    <div className='my-24'>
     <div className='text-center text-3xl py-2'>
       <Title text1={"RELATED"} text2={"PRODUCTS"}/>
     </div>
     <div className='grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))}
     </div>
    </div>
  )
}

export default RelatedProduct
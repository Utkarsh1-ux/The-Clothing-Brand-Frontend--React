import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
       <div className='text-center text-2xl pt-10 border-t'>
            <Title text1={'CONTACT'} text2={"US"}/>
       </div> 
       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[600px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>459234 Hogwarts Hill <br /> Case 450, New York  </p>
            <p className='text-gray-500'>Tel : (321) 666-891 <br /> Email:The@clothing.com</p>
            <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
              <p className='text-gray-500'>We’re always looking for passionate, creative people to grow with us. If fashion inspires you and teamwork excites you, The Clothing is the place to build your career.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-orange-900 hover:text-white transition-all duration-500'>Explores Opportunities</button>
        </div>
       </div>
       <NewsLetterBox/> 
    </div>
  )
}

export default Contact
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         <div>
            <img src = {assets.logo} className='mb-3 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>We are committed to delivering high-quality solutions that combine innovation, reliability, and exceptional user experience for every customer.</p>
         </div>
         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
             <li>Home</li>
             <li>About us</li>
             <li>Delivery</li>
             <li>Privacy policy</li>
            </ul>
         </div>
         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
              <li>+1-234-576-8760</li>
              <li>contact@clothing.com</li>
            </ul>
         </div>
        </div>

        <div> 
            {/* for last line */}
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ clothing.com -All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
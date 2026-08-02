import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets.js'
import NewsLetterBox from '../components/NewsLetterBox.jsx'
const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>We started our journey with a simple belief — shopping should be easy, reliable, and enjoyable. Our platform is built to help customers discover quality products without hassle, all from the comfort of their homes.</p>
           <p>From fashion and lifestyle essentials to everyday must-haves, we carefully select products that meet our standards of quality and value. We work closely with trusted suppliers to ensure every item delivers both style and satisfaction.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Our mission is to create a smooth and confident shopping experience by offering variety, convenience, and dependable service. We aim to go beyond expectations, from browsing to delivery and beyond...</p>
         </div>
      </div>
      <div className='text-xl py-4'>
       <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We are committed to delivering high-quality, reliable, and secure solutions. Every feature of our platform goes through rigorous testing to ensure performance, accuracy, and user satisfaction. Our quality assurance process focuses on functionality, usability, and security, so you can trust our services with confidence.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Our platform is designed with convenience in mind. Easy navigation, quick access to features, and a user-friendly interface ensure you get things done effortlessly, anytime and anywhere.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>We are dedicated to providing exceptional customer service at every step. Our support team is responsive, knowledgeable, and always ready to assist you, ensuring a smooth and satisfying experience.</p>
          </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
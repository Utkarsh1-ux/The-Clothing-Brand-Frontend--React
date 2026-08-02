import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
          event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 dark:text-gray-100'>Subscribe and get 10% off</p>
       <p className='text-gray-400 mt-3'>
       Don’t miss out! Get news, updates, and tips delivered straight to your inbox.
       </p>
       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto my-6 shadow-md rounded-md overflow-hidden border border-gray-200'>
        <input className='w-full sm:flex-1 outline-none px-4 py-4' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-blue-950 text-white text-xs px-10 py-4 cursor-pointer !rounded-none !shadow-none !translate-y-0'>SUBSCRIBE</button>
       </form>

    </div>
  )
}

export default NewsLetterBox
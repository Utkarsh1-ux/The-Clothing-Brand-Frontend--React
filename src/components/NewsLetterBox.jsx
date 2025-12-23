import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
          event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe and get 10% off</p>
       <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nam. Voluptate deserunt accusamus, similique cumque quidem doloribus cupiditate maiores reprehenderit ut libero tempora exercitationem hic, ea, minus necessitatibus reiciendis! Odit.
       </p>
       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button type='submit'  className='bg-orange-900 text-white text-xs px-10 py-4'>SUBSCRIBE</button>
       </form>

    </div>
  )
}

export default NewsLetterBox
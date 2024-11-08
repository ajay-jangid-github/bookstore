//import React from 'react'
import bookstore_main_img from "../img/bookstore_main_img.png";
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      
      <div className='w-full md:w-1/2 mt-12 md:mt-24 md:order-1 order-2'>
      <div className='space-y-6'>
      <h1 className='text-4xl font-bold'>
      `Welcome to Bookstore, Your One-Stop Shop for <span  className ='text-red-400'>Books of Every Kind!`</span>
      </h1> 
    
    <p>
      `At Bookstore, we believe there’s a book for everyone. Whether you’re diving into a thrilling mystery, exploring new worlds in sci-fi, or seeking inspiration in self-help, our carefully curated collection has something for every reader. Browse through our latest arrivals, timeless classics, and must-read recommendations. Let us help you find your next favorite book today!`
      </p>

      <div>
      <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
      </div>
      <button className="btn btn-secondary">Secondary</button>
      </div>
    </div>

    
     <div className=' order-1  w-full md:w-1/2 '>
     <img className="w-90 h-90 mr-4" src={bookstore_main_img} alt="Bookstore Main" />

     </div>
     </div>
    </>
  )
}

export default Banner
//import React from 'react'
import { Link } from 'react-router-dom';
import list from '../list.json';
import Cards from './cards';
function Courses() {

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 item-center justify-center text-center">
      <h1 className="text-2xl font-semi-bold md:text-4xl">
     A course for budding critics and readers who want to go beyond the <span className="text-pink-500">surface of texts</span>.
     </h1>
      <p className="mt-12">Dive into classic and contemporary literature. Perfect for beginners wanting to explore different genres and authors.Unleash your imagination! Learn the art of storytelling, character development, and more.Ideal for anyone looking to master English grammar, from complex sentence structures to stylistic nuances.</p>
      <Link to ="/">
      <button className="bg-pink-500 text-white px-4 py-2 font-bold mt-6 rounded-md hover:bg-pink-700 duration-300">back</button>
      </Link>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          list.map((item)=> (
            <Cards  key ={item.id} item={item}/>
          ))
        }
      </div>
     </div>
    </div>
    </>
  )
}

export default Courses
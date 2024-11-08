//import React from 'react'
import PropTypes from "prop-types";

function Cards({ item }) {
 
  return (
   <>
   <div className="mt-4 my-3">
   <div className="card bg-base-100 w-94 shadow-xl">
  <figure>
    <img
      src={item.imgUrl}
      alt="Shoes" 
      className="w-80 h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline bg-black-500">{item.price}</div>
      <div className="badge badge-outline text-pink-300  transition-transform duration-300 hover:scale-105">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired,
};

export default Cards
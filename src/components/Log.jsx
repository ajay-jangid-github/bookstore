//import React from 'react'
import { Link } from "react-router-dom"
function Log() {
  return (

<>
<div>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login!</h3>
   <div className="mt-2 space-y-2">
    <span>Email</span>
    <br></br>
    <input type="email"
    placeholder="Enter Your Email"
    className="w-80 px-3 border rounded-md outline-none"
    />
   </div>
   {/* password */}
   <div className="mt-2 space-y-2">
    <span>Password</span>
    <br></br>
    <input type="text"
    placeholder="Enter Your Password"
    className="w-80 px-3 border rounded-md outline-none"
    />
   </div>
   {/* button*/}
   <div className=" flex justify-around mt-4">
   <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-green-700 durartion-200">Login</button>
   <p>Not registerd yet?<span className="text-blue-500 cursor-pointer"><Link to ="/signup" >Signup</Link></span></p>
   </div>
  </div>
</dialog>
</div>
</>
  )
}



export default Log
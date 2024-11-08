//import React from 'react'

import Courses from "../components/Courses"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
//import list from '../list.json';

function CoursesPage() {

  return (
   <>
   <Navbar />
  <div className="min-h-screen">
  <Courses />
  </div>
   <Footer />
   </>  )
}

export default CoursesPage
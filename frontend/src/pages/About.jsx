import React from 'react'
import Navbar from '../components/Navbar'

export default function About() {
  return (
         <>
        <Navbar name="KASHTECH"/>
         <div id='home' className="container-fluid d-flex bg-dark align-items-center" style={{height : "100vh",alignItems:'center',justifyContent:'center'}}>
            <h1 className='text-center text-dark' >About Page</h1>
          </div>
          </>
  )
}

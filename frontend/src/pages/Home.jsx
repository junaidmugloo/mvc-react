import React from 'react'
import Navbar from '../components/Navbar'
import { useState,useEffect } from 'react';
import axios from "axios"






export default function Home() {
   
    
        const [meals, setMeals] = useState([])
        useEffect(() => {
          axios.get('http://localhost:3000/books/')
            .then((res) => {
              setMeals(res.data);
            })
        }, [])
        
        return (
            <>
            <Navbar/>
          <div id='home' style={{paddingTop:"5rem",height:"100vh"}}>
            <table className='table' border="1px">
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date</th>
                </tr>
            {
            meals.map((m) => (
           <tr>
            <td>{m.title}</td>
            <td>{m.author}</td>
            <td>{m.publishedDate}</td>
            </tr>
            ))
            }
            </table>
          </div>
          </>
        )
    
}


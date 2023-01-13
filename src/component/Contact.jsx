import React from 'react'
import { NavLink as Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div>
      <nav>
       <h1>Logo</h1>
       <ul>
         <li>
           <Link to= "/">Home</Link>
         </li>
         <li>
           <Link to= "/Project">Project</Link>
         </li>
        </ul>
      </nav>
 
 <di className = "home-body">
   <h1>CONTACT</h1>
 </di>
    </div>
  )
}

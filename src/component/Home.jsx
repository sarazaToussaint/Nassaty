import React from 'react'
import { NavLink as Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
    <nav>
    <h1>Logo</h1>
    <ul>
     <li>
       <Link to= "/Project">Pojects</Link>
     </li>
     <li>
       <Link to= "/Contact">Contact</Link>
     </li>
    </ul>
 </nav>
 
 <di className = "home-body">
   <h1>NASSATY</h1>
 </di>
</div>
  )
}

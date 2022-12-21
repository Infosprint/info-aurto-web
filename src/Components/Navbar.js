import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
   
    
   <div className='header'>
     
    
    <div className="logo">
    <Link to="/">
            AUTO TRADE
          </Link>
    </div>

<div className="cars">
SELL MY CAR

</div>
<div className="bikes">
  SELL MY BIKE
</div>
<Link to = "/Sellcommercialvehicle"><div className="sellcommercialvehicle">
SELL COMMERCIAL VEHICLE
</div>
</Link>

<Link to = "/Contactus"><div className="contactus">Contactus</div></Link>
<div className="login">login/signup</div>
   </div>
  

  )
}


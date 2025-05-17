import React from 'react'
import "./PriceCard.css"
export default function PriceCard({area,price,h3,func}) {
    const activate=()=>{
      document.getElementById("popup").classList.add("active")
  }
  return (
    <div className='price-card'>
        <span>{area} Sq.Yd.</span>
        <h3> &#8377; {price} {h3}</h3>
        <div>size &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{area} Sq.Yd.</div>
        <hr className='hr'/>
        <button onClick={()=>{func(true)}}>Enquire now</button>
      
    </div>
  )
}

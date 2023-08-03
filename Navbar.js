import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
function Navbar() {
  const navigate=useNavigate();
  return (
   
    <div>
      <div id="div1">
           
           <h1>AJIO</h1> 
             <input type="text" placeholder='try Saree, Kurti or Search by Product Code'></input>
            <h2 Style="color:grey; font-weight:0.5px;">|</h2>
            <h4>become supplier</h4>
            <h2 Style="color:grey; font-weight:0.5px;">|</h2>
            <h4>Profile</h4>
            <h4>Cart</h4> 
           
            
            </div>
            <hr></hr>
            <div id="div2">
                <button onClick={()=>navigate('/')}> <h4>Home</h4></button>
                <button onClick={()=>navigate('./Women')}> <h4>Women</h4></button>
                <button onClick={()=>navigate('./Men')}><h4>Men</h4></button>
                <button onClick={()=>navigate('./Kids')}><h4>Kids</h4></button>
                <button onClick={()=>navigate('./Jewellery')}><h4>Jewellery </h4></button>
                <button onClick={()=>navigate('./Footwear')}><h4> Footwear</h4></button>
               +++

               
            </div>
        <nav>
            
            
        </nav>
    </div>
  )
}

export default Navbar





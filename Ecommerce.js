import React, { useState } from 'react';
import './Ecommerce.css'
import { useNavigate } from 'react-router-dom';
function Ecommerce() {
  const navigate=useNavigate();
  return (
    <div>
        
            <hr></hr>
            
            <h2>Top Categories to choose from</h2>
            <div id="clothes">
              {/* <h2 id="text">Be fashion forwrad</h2> */}
              <div id="women-store">
              <img src=" https://images.meesho.com/images/marketing/1678691686252_400.webp" />
            </div>
            <div id="men-store">
                <img src="https://images.meesho.com/images/marketing/1678691699680_300.webp "/>
            </div>
            <div id="kids-store">
                <img src="https://lh3.googleusercontent.com/Yf0Sj84B9a5QBmFEpJSLgfGQm71im5iLC3xiysqkneLCYza51QbokS25PnwXfg9MhdQ7uyt3BSRsGaUdBiaLqvvD1GipWGzDeFhDVoEO" />
               
            </div> 

            </div> 
            <div id="div">
             
              <div id="sales">
                <img src="https://i.ytimg.com/vi/TYy4ZUtYsTQ/maxresdefault.jpg" /><br/>
                <div id="sales2">
                <img src="https://asset22.ckassets.com/resources/image/staticpage_images/03-27-Ajio-Banner-1585313447.jpg" />
                </div>
              </div>
                          </div>
            
            <div id="div3">  <h1 id="text">Essentials</h1>
                  {/* <button id="b1">View All</button> */}
               <div id="Homedecor">
                <img src="https://images.meesho.com/images/marketing/1678691846068_200.webp" />
               </div>
               <div id="kitchen">
                  <img src="https://images.meesho.com/images/marketing/1678691832099_200.webp"/>
               </div>
               <div id="health">
                <img src="https://images.meesho.com/images/marketing/1678691796046_200.webp" />
               </div>
            </div>
    
              <div id="div4"><h1 id="text1">New Styles</h1>
              <div id="accessories">
                <img src="https://images.meesho.com/images/marketing/1678691960553_200.webp"/>
               </div>
               <div id="footwear">
               <img src="https://images.meesho.com/images/marketing/1678691936892_200.webp"/>
              </div>
               <div id="electronics">
                 <img src="https://images.meesho.com/images/marketing/1678691925419_200.webp"/>
               </div>
               </div> 
               
        </div>
       
      
    
    
  )
};


export default Ecommerce
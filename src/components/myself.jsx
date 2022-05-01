import React from 'react';
import {FaQuoteLeft} from "react-icons/fa"

const MySelf = () => {
    return ( 
        <div className="card" style={{width: 288,position:"relative", marginLeft:600}}>
              <FaQuoteLeft color="tomato" size={30} style={{position:"absolute", top:-8, left:-6}}/>
              <img src="images/super.jpeg" alt='' className="card-img-top"/>
              <div className="card-body">
                <p className="card-text" style={{fontStyle:"italic"}}>Many great people to all my salute...</p>
              </div>
       </div>
     );
}
 
export default MySelf;
import React from "react";
import ReactDOM from "react-dom";


/**
 * header 
 *   -logo
 *   -home
 *    -about ua
 *    -contact
 *    -cart
 * Body
 *     search
 *    -restaurant-container
 *          -restaurantcard
 *               Img
 *               Name of res,star rating  cuisne delivery time
 *               
 * footer
 * 
 */

const Header=()=>{
    return(
    <div className="header">
        <div className="logo">
            <img  src="" alt="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

const RestaurantCard=({resName,cusine,rating,delTime})=>{
      return(
        <div className="res-card">
            
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/315c12d92620968af85261489c0021d2" alt="res-img"/>

            <h3>{resName}</h3>
            <h4>{cusine}</h4>
            <h4>{rating}</h4>
            <h4>{delTime}</h4>
            </div>

      );
};
const Body=()=>{
    return(
        <div className="body">
       <div className="search">
        <input type="text"/>
        <button>Search</button>
       </div>
       <div className="res-container">
             <RestaurantCard resName="goblu ka dhaba" cusine="chicken thali north indian" rating="4.4 stars" delTime="30 minutes"  />
             <RestaurantCard resName="chillu briyani" cusine="briyani hyderabadi style" rating="4.2 stars" delTime="22 minutes" />
        </div>
        </div>
       
    );
};
const Footer=()=>{
    return(
        <div className="footer" >
            <div className="footer-content">
                <h3>About Us</h3>
                <h3>Contact Us</h3>
                <h3>Careers</h3>
                <h3>Privacy Policy</h3>
                <h3>Terms & Conditions</h3> 
               </div>
            </div>

    );
};
const Applayout=()=>{
    return(
    <div className="app">
        <Header/>
        <Body/>
        <Footer/>
    </div>
    );
};
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout/>);
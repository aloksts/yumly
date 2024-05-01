import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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

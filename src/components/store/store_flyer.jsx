import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './store.css';
import Storehome from './storehome';



export let HasNotMounted = true;

const StoreFlyer = () => {


useEffect(() => {
  
  document.title = `You clicked times`;
  HasNotMounted= false;
  console.log("hi there " + HasNotMounted);

}, []);




    const [visible, setVisibility] = useState(true);

    const flyerHandler =()=>{
        // console.log(visible)
        setVisibility(false);
        // console.log(visible)
    }
    
  

if (HasNotMounted){
  return (
    <div className= {visible ? "flyer" : "closed_flyer"} >  
   
        <div className='flyer_specific'>
        {/* <Link to path='storehome'> */}
        <div className='close_flyer' onClick= {flyerHandler}>X</div> 
        {/* </Link> */}
       <h1>FLYER!</h1>
        Seasonal Flyer here!</div>
       
        </div> 
  )
}
  return;
}

export default StoreFlyer
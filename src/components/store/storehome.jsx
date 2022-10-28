import React from 'react'
import { useEffect } from 'react'
import ProdData from '../data/product-data.json'
import './store.css'    
import StoreFlyer from './store_flyer'
import { Link } from 'react-router-dom'
import { HasNotMounted } from './store_flyer'






const Storehome = () => {







  return (
    <div className='container'>
       div class <StoreFlyer />
    {/* <div className='dimmer'></div> */}
   <div className='merch-display-case'>
   <div></div>
   <p>
   Filter by Category?
   men's clothing
jewelery
electronics
 women's clothing
 </p>
 <div></div>
   {ProdData.map((item) => (<Link to={`./${item.id}`}><div  key={item.id} className='merch-item-display' >
    <div className='merch-cont-left'> <h2 className='merch-item-title'> {item.title}</h2>
    <span className='merch-item-price'>{item.price}</span>
    <span className='merch-item-rating'>{item.rating.rate} out of {item.rating.count}</span>        
    </div>
   <div className='merch-cont-right'><img className='merch-item-image' src={item.image} /></div>
   <div className='merch-cont-bottom'> <p>{item.description}</p></div>
   </div></Link>))}
    <div>
    </div>
    </div>
    </div>
  )
}

export default Storehome
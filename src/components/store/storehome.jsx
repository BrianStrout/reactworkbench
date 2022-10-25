import React from 'react'
import ProdData from '../data/product-data.json'
import './store.css'    



const storehome = () => {
console.log(ProdData)
const imported = JSON.stringify(ProdData);
// console.log(imported);

// console.log(parsed);

// async const pullData = get


// ProdData.map((c)=>{
//     console.log(c.category);
// })




  return (
   <div className='merch-display-case'>
   Filter by Category?
   men's clothing
jewelery
electronics
 women's clothing
   
   {ProdData.map((item) => (<div className='merch-item-display'>
   <div key={item.id} className='merch-cont-left'> <h2 className='merch-item-title'> {item.title}</h2>
    <span className='merch-item-price'>{item.price}</span>
    <span className='merch-item-rating'>{item.rating.rate} out of {item.rating.count}</span>    
    
    </div>
   <div className='merch-cont-right'><img className='merch-item-image' src={item.image} /></div>
   <div className='merch-cont-bottom'> <p>{item.description}</p></div>
  
   

   </div>))}


    <div>
    

    
    </div>
    </div>
  )
}

export default storehome
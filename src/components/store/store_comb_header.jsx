import React from 'react'
import { Outlet } from 'react-router-dom'
import Storeregionalheader from './storeregionalheader'
import Onlineheader from './store_onlineheader'
import './store.css'

const store_comb_header = () => {
  return (
    <div>
    <div className='outie'>X</div>
        <Storeregionalheader />
        <Onlineheader />
        <Outlet />
    
    
    </div>
  )
}

export default store_comb_header
import React from 'react'
import StoreCombHeader from './store_comb_header'

import Storehome from './storehome'
import { Outlet } from 'react-router-dom'


const storelanding = () => {
  return (




    
    <div>
    <StoreCombHeader />
    <section>
      <Outlet />
    </section>
    </div>
  )
}

export default storelanding
import React, { useState, useContext } from 'react'
import ListItems from './ListItems';
import CartTotal from './CartTotal'
import {useGlobalContext} from './context'

function Cart() {
    const value=useGlobalContext();
    console.log(value)
    
    return (
        <div className='grid  grid-cols-1  md:grid-cols-7 gap-1'>
            <div className='bg-white md:col-span-5 mt-4 ml-4' >
            <ListItems />

            </div>

            <div className='my-4 mx-4 col-span-2 '>
            <CartTotal  />
            </div>
          
        </div>
    )
}

export default Cart

import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

function ListItems() {

    const {cart}=useGlobalContext();
    if(cart.length<1){
        return <h2>cart empty</h2>
    }
    return (


        <div className='p-5 divide-y divide-y-2 divide-gray-500 divide-solid mt-5'>
            <h1 className='text-3xl font-bold mb-5'>Shopping Cart</h1>
 
     <div className='mt-3 '>
     {cart.map((item)=>{
return  <><CartItem key={item.id} {...item} /><hr/></>
            })}
          
     </div>
        </div>
    )
}

export default ListItems
   
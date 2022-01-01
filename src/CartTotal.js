import React from 'react'
import { useGlobalContext } from './context'

function CartTotal() {
    const {cart,amount,total}=useGlobalContext();
    return  <div className='pt-8 px-4 text-black pb-4 mx-auto    max-w-md bg-white  '>

<p className='font-bold text-lg'>Subtotal({amount} items):${total}</p>
<button className='mt-4 mb-1 text-base hover:bg-darkYellow bg-lightYellow py-1 px-3 rounded-md w-full border-MeduimYellow border-2'>Procced to checkout</button>
    </div>
}

export default CartTotal

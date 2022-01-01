import React from 'react'
import { useGlobalContext } from './context'

function CartItem(props) {
    const {deleteItem,updateItem}=useGlobalContext();
    const opt=Array.from({ length: 9 }, (v, i) => i)
    return <div className='flex justify-between  '>

<div className='py-5 flex '>

<div className='img w-44 mr-4 flex-shrink-0'>
<img className='w-full' src={`/items/${props.image}`} alt="" />
</div>
<div className='info'>
    <p className='font-bold text-title text-lg mb-1'>{props.title}</p>
    <p className='text-stock mb-1 '>{props.stock}</p>
    <div className='items-center flex '>
        <div className='mr-2 '>
            <select className='p-2 select-drop bg-gray-100 border border-gray-500  ' name="" id="" defaultValue={props.quantity} onChange={(e)=>{updateItem(props.id,e.target.value)}}>
                {opt.map((i)=>{
                    return <option key={i} value={i+1}>Qty: {i+1}</option>
                })}
                
              



            </select>
        </div>
      <div className='w-0.5 h-4 bg-gray-300'></div>
        <button className='ml-2 text-title ' onClick={()=>{deleteItem(props.id)}}>delete</button>
    </div>

    <div className='price font-bold mt-5 block sm:hidden'>
${props.price}
        </div>

</div>



</div>

          <div className='price font-bold mt-5 hidden sm:block'>
${props.price}
        </div>
    </div>

}

export default CartItem

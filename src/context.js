import React, { useState, useContext, useEffect } from 'react'
import items from './Data'
const AppContext = React.createContext()

function AppProvider({ children }) {

    const [cart,setCart]=useState(items)
    const [amount,setAmount]=useState(0)
    const [total,setTotal]=useState(0)

const deleteItem=(id)=>{
    let tempCart=cart.filter((item)=>{return item.id!= id})
    console.log(tempCart)
    setCart(tempCart)
}
const updateItem=(id,quantity)=>{
    console.log(quantity,'-------------')

 
    

    let tempCart=cart.map((item)=>{
        if(item.id== id){
            item.quantity=parseInt(quantity);
        }
        return item})
        console.log(tempCart)
    setCart(tempCart)

}

    useEffect(() => {
        console.log("cart updated")
        let tempTotal=0;
        let tempAmount=0;
     cart.map((item)=>{
        tempTotal=tempTotal+item.price*item.quantity
        tempAmount=tempAmount+item.quantity
     })
     setTotal(tempTotal.toFixed(2))
     setAmount(tempAmount)
       
    }, [cart])
    return <AppContext.Provider value={{deleteItem,updateItem,cart,amount,total}}>
{children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }
  

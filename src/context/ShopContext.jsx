import { createContext, useEffect, useState } from "react";
import{ products } from "../assets/assets.js"
// import { useSearchParams } from "react-router-dom";
import {toast} from "react-toastify"

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{

    const currency = "₹";
    const delivery_fee = 10;
    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
    const[cartItems , setCartItems] = useState({});


    const addToCart =async (itemId,size)=>{
          if (!size) {
            toast.error('Select Product Size');
            return;
          }

         let cartData = structuredClone(cartItems);

         if (cartData[itemId]) {
              if (cartData[itemId][size]) {
               cartData[itemId][size] += 1;
              }
              else{
               cartData[itemId][size] = 1;
              }
         }
         else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;  // using this in the upper object there will be one entry get added
         }
         setCartItems(cartData);

    }

      const getCartCount = ()=>{
         let totalCount = 0;
         for(const items in  cartItems){
            for(const item in cartItems[items]){
                try { 
                  if (cartItems[items][item] > 0) {
                     totalCount += cartItems[items][item];
                      console.log(totalCount);
                  }
                } catch (error) {
                  
                }
            }
         }
        
         
        return totalCount;

      }

       const value = {
         products, currency,delivery_fee,search,
         setSearch,showSearch,setShowSearch,cartItems,addToCart,
         getCartCount,

       }
       return(
        <ShopContext.Provider value={value}>
           {props.children}
        </ShopContext.Provider>
       )
}


export default ShopContextProvider;
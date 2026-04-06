import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify'


const Verify = () => {
    const {navigate,setCartItems,token,backendUrl} =  useContext(ShopContext);
    const [serachParams,setSearchParams] = useSearchParams();

    const success = serachParams.get('success');
    const orderId = serachParams.get('orderId');
    console.log(orderId);
    const verifyPament = async (req,res)=>{
        try {
            if(!token){
                return null;
            }
            const response = await axios.post(backendUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}});
            if(response.data.success){
                setCartItems({});
                navigate('/orders')
            }
            else{
                navigate('/cart');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    useEffect(()=>{
        verifyPament();
    },[token])
  return (
    <div>
        
    </div>
  )
}

export default Verify

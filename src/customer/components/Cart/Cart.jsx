import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate=useNavigate();
    const handelCheckout=()=>{
        navigate("/checkout?step=2")
    }
    return (
        <div>

            <div className="lg:grid grid-cols-3 lg:px-16 relative gap-5 mb-7 mt-7">

                <div className="col-span-2 ">
                   {[1,1,1,1].map((item)=><CartItem />)}
                </div>

                <div className="px-5 lg:sticky lg:top-5 mt-5 lg:mt-0">
                    <div className="border border-gray-200">
                        <p className="uppercase font-bold opacity-60 pb-4 ">
                            price details
                        </p>

                        <div className="space-y-3 font-semibold border-t border-gray-200 mb-10">
                            <div className="flex justify-between pt-3 text-black" >
                                <span>Price</span>
                                <span>₹4697</span>
                            </div>
                            {/* Discount */}
                            <div className="flex justify-between pt-3 " >
                                <span>Discount</span>
                                <span className='text-green-600'>-₹3419</span>
                            </div>
                            {/* Delivery Charges */}
                            <div className="flex justify-between pt-3 text-black" >
                                <span>Delivery Charges</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            {/* Total Amount */}
                            <div className="flex justify-between pt-3 text-black" >
                                <span>Total Amount</span>
                                <span className='text-green-600'>₹1278</span>
                            </div>
                        </div>
                        
                        <Button onClick={handelCheckout} variant="contained" className='w-full mt-5' sx={{px:"2.5rem", py:".7rem", bgcolor:"#9155fd"}}>
                            Checkout
                            </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart

import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material';


const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border border-gray-300">
        <AdressCard />
      </div>

      <div>

        <div className="lg:grid grid-cols-3  relative gap-5 mb-7 mt-7">

          <div className="col-span-2 ">
            {[1, 2, 3, 4].map((item, index) => (
              <CartItem key={index} />
            ))}
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

              <Button variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>Checkout</Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OrderSummary

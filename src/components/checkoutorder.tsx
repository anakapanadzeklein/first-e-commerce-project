import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types/cartitemtypes';
import { CheckoutOrderTypes } from '../types/checkoutordertypes';


const CheckoutOrder: React.FC<CheckoutOrderTypes> = ({ cart, totalPrice, finalPrice }) => {

  return (

    <div className="w-[372px] h-[430px] ">

      <h2 className="text-base font-semibold mb-10">Order Summary</h2>

      <div className="flex justify-between items-center mb-4">

        <span className="text-gray-500">Total Items:</span>
        <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>

      </div>



      <div className="flex justify-between items-center mb-4">

        <span className="text-gray-500">Subtotal:</span>
        <span>$ {totalPrice}</span>

      </div>



      <div className="flex justify-between items-center mb-4">

        <span className="text-gray-500">Shipping:</span>
        <span>Free</span>

      </div>



      <div className="flex justify-between items-center mb-7">

        <span className="text-gray-500">Tax:</span>
        <span>$ 3.00</span>

      </div>


      <div className="border-b border-[#E9E9EB]"></div>


      <div className="flex justify-between items-center mb-4 mt-5">

        <span className="text-gray-500">Total:</span>
        <span>$ {finalPrice}</span>

      </div>


      <Link to="/afterpayment">
        <button className="block w-full bg-black text-white py-2 px-4 rounded-md text-center hover:bg-gray-800 mt-16">
          Place an order
        </button>
      </Link>

    </div>
  );
};

export default CheckoutOrder;

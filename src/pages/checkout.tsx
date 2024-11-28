import React, { useState, useEffect } from 'react';
import { CartItem } from '../types/cartitemtypes';
import CheckoutOrder from '../components/checkoutorder';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);
    calculateSubtotal(cartData);
  }, []);

  const calculateSubtotal = (cartItems: CartItem[]) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(parseFloat(subtotal.toFixed(2)));
    setFinalPrice(parseFloat((subtotal + 3.0).toFixed(2))); 
  };

  return (
    <main className='mx-auto max-w-[1440px] px-5'>

        <section className="w-full h-40 flex flex-col items-start justify-center gap-2 mb-20" style={{ backgroundColor: '#F6F6F6', paddingBottom: '120px' }}>
          <h1 className="text-2xl font-semibold mt-28 mx-32"> Checkout </h1>
          <div className="flex items-center gap-3 mx-32">
            <span className="text-slate-500"> Ecommerce </span>
            <img src="/images/Vector-right.png" alt="right-arrow" className="w-2 h-3" />
            <span> Checkout </span>
          </div>
        </section>

        <section className='w-full flex items-center gap-16' style={{ backgroundColor: '#FFF', paddingBottom: '150px' }}>

            <div className='mx-32'>


                <h1 className='text-lg font-semibold mb-20'> Shipping Address </h1>

                <div className='flex flex-col'>
                    <span className='text-[#474B57]'> Street Adress </span>
                    <input type="text" className='border border-[#E6E7E8] focus:outline-none ps-1 w-[534px] h-[45px] rounded-md mb-8'/>
                </div>


                <div className='flex items-center gap-4'>
                    <div className='flex flex-col'>
                        <span className='text-[#474B57]'> City </span>
                        <input type="text" className='border border-[#E6E7E8] focus:outline-none ps-1 w-[259px] h-[45px] rounded-md mb-8'/>
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-[#474B57]'> State </span>
                        <input type="text" className='border border-[#E6E7E8] focus:outline-none ps-1 w-[259px] h-[45px] rounded-md mb-8'/>
                    </div>
                </div>


                <div className='flex items-center gap-4'>
                    <div className='flex flex-col'>
                        <span className='text-[#474B57]'> Zip Code </span>
                        <input type="text" className='border border-[#E6E7E8] focus:outline-none ps-1 w-[259px] h-[45px] rounded-md mb-8'/>
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-[#474B57]'> Country </span>
                        <input type="text" className='border border-[#E6E7E8] focus:outline-none ps-1 w-[259px] h-[45px] rounded-md mb-8'/>
                    </div>
                </div>


                <div className='flex items-center gap-4 mt-8'>
                    <div className='flex flex-col'>
                        <span className='text-[#474B57]'> Email </span>
                        <input type="email" className='border border-[#E6E7E8] focus:outline-none ps-1 w-[259px] h-[45px] rounded-md mb-8'/>
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-[#474B57]'> Full Name </span>
                        <input type="text" className='border border-[#E6E7E8] focus:outline-none ps-1 w-[259px] h-[45px] rounded-md mb-8'/>
                    </div>
                </div>


            </div>




            <div className='border-s p-20'>
                <h1 className='text-lg font-semibold mb-0'> Your Order </h1>


                <div className="flex justify-between items-center mb-12">

                    <div></div>
                    <Link to="/shoppingcart"><button className='flex items-center justify-center border border-slate-400 w-[107px] h-11 rounded-md text-gray-500 transition duration-150 hover:bg-slate-50 active:bg-white'>
                         Edit Cart
                    </button> </Link>

                </div>                


                <div>
                    <CheckoutOrder cart={cart} totalPrice={totalPrice} finalPrice={finalPrice} />
                </div>
            </div>
        </section>
    </main>
  );
};

export default Checkout;
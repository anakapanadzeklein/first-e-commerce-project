import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/counter';
import { CartItem } from '../types/cartitemtypes';
import OrderSummary from '../components/ordersummary';

const ShoppingCart: React.FC = () => {

    const [cart, setCart] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [finalPrice, setFinalPrice] = useState<number>(0); 
  
    const tax = 3.00;
  
    useEffect(() => {

      const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(cartData);
      setFinalPrice(cartData.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)); 
      calculateSubtotal(cartData); 

    }, []);
  

    const calculateSubtotal = (cartItems: CartItem[]) => {

      const subtotal = cartItems.reduce(
        (sum: number, item: CartItem) => sum + item.price * item.quantity,
        0
      );

      setTotalPrice(parseFloat(subtotal.toFixed(2))); 
      calculateTotal(subtotal); 
    };
  

    
    const calculateTotal = (subtotal: number) => {

      const total = subtotal + tax;
      setFinalPrice(parseFloat(total.toFixed(2)));

    };
  


    const handleQuantityChange = (id: number, change: number) => {

      const updatedCart = cart.map((item) => {

        if (item.id === id) {
          const updatedQuantity = item.quantity + change;

          return {
            ...item,
            quantity: Math.max(1, updatedQuantity),
          };
        }
        return item;

      });

      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      calculateSubtotal(updatedCart);
    };
  


    const handleRemoveItem = (id: number) => {

      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      calculateSubtotal(updatedCart);

    };
  

  if (cart.length === 0) {
    return (

        <div className="mx-auto max-w-[1440px] px-5 mt-4 text-center">

        <section className="w-full h-40 flex flex-col items-start justify-center gap-2 mb-20" style={{ backgroundColor: '#F6F6F6', paddingBottom: '120px' }}>
        <h1 className="text-2xl font-semibold mt-28 mx-32"> Cart </h1>
        <div className="flex items-center gap-3 mx-32">
          <span className="text-slate-500"> Ecommerce </span>
          <img src="/images/Vector-right.png" alt="right-arrow" className="w-2 h-3" />
          <span> Cart </span>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 mt-20 text-center">
        <h1 className="text-2xl font-semibold mb-5">Your Cart is Empty</h1>
        <Link
          to="/categories"
          className="mt-6 inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 mb-[100px]"
        >
          Go Shopping
        </Link>
      </div>

      </div>
    );
  }

  return (
    <main className="mx-auto max-w-[1440px] px-5">

      <section className="w-full h-40 flex flex-col items-start justify-center gap-2 mb-20" style={{ backgroundColor: '#F6F6F6', paddingBottom: '120px' }}>
        <h1 className="text-2xl font-semibold mt-28 mx-32"> Cart </h1>
        <div className="flex items-center gap-3 mx-32">
          <span className="text-slate-500"> Ecommerce </span>
          <img src="/images/Vector-right.png" alt="right-arrow" className="w-2 h-3" />
          <span> Cart </span>
        </div>
      </section>

      <div className='w-[628px] mb-12 mx-32'>
        <span className="text-base font-semibold"> Your Cart </span>
        <div className="w-[628px] h-2 border-b border-[#E9E9EB] mt-2"></div>
      </div>

      <section className="w-full gap-16 flex items-center" style={{ backgroundColor: '#FFF', paddingBottom: '100px' }}>

             <div className='"w-[628px] mx-32"'>
                <div className="lg:col-span-2">
                {cart.map((item) => (
                    <div
                    key={item.id}
                    className="flex items-center justify-between gap-6 p-4 mb-6 w-[628px] mx-32"
                    >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover"
                    />
                    <div className="flex-grow">
                        <h2 className="text-md font-medium text-[#0E1422]">{item.title}</h2>
                        <p className="text-sm font-medium text-[#5C5F6A]">
                        <span
                            className={`inline-block w-4 h-4 rounded-full ml-1 me-2 mt-2 mb-0`}
                            style={{
                                backgroundColor: item.color || '#FFF',
                            }}
                        ></span>|{' '} Size: {item.size}
                        </p>
                    </div>
                    <p className="text-gray-500 mt-1">${item.price}</p>
                    <div className="rounded-md mb-4">
                        <Counter
                        itemId={item.id}
                        quantity={item.quantity}
                        onIncrement={(id) => handleQuantityChange(id, 1)}
                        onDecrement={(id) => handleQuantityChange(id, -1)}
                        />
                    </div>
                    <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="me-3"
                    >
                        <img src="/images/close.png" alt="" />
                    </button>
                    </div>
                ))}
                </div>
            </div>



            <div>
               <OrderSummary cart={cart} totalPrice={totalPrice} finalPrice={finalPrice} />
            </div>


        </section>


    </main>
  );
};

export default ShoppingCart;

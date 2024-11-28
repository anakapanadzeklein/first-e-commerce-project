import React from 'react';
import { Link } from 'react-router-dom';

const AfterPayment: React.FC = () => {
  return (
    <main className='mx-auto max-w-[1440px] px-5'>

        <section className="w-full h-40 flex flex-col items-start justify-center gap-2 mb-20" style={{ backgroundColor: '#D5E4D9', paddingBottom: '120px' }}>
            <h1 className="text-2xl font-semibold mt-28 mx-32"> Successful Order </h1>
            <div className="flex items-center gap-3 mx-32">
                <span className="text-slate-500"> Ecommerce </span>
                <img src="/images/Vector-right.png" alt="right-arrow" className="w-2 h-3" />
                <span> Successful Order </span>
            </div>
        </section>

        <section className='w-full flex flex-col items-center justify-center mb-20'>
            <img src="/images/Illustration.png" alt="illustration" />
            <h1 className='text-2xl font-bold'> Thank you for shopping </h1>
            <span className="text-slate-500 w-[379px] flex text-center mt-5"> Your order has been successfully placed and is now being processed. </span>

            <Link to="/profile"><button className='text-white text-sm flex items-center justify-center rounded mt-12' style={{ backgroundColor: '#0E1422', width: '183px', height: '44px' }}>
                <span> Go to my account </span>
                <img src="/images/ArrowRight.png" alt="right-arrow" className='pl-3' />
             </button></Link>
        </section>
    </main>
  );
};

export default AfterPayment;
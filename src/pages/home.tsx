import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Clothes } from '../components/clothes'; 

const Home: React.FC = () => {
  return (
    <main className='mx-auto max-w-[1440px] px-5'>
      <section className='w-full flex items-center justify-center gap-96' style={{ backgroundColor: '#F6F6F6', height: '440px' }}>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-semibold pl-0.5' style={{ color: '#202533' }}> Fresh Arrivals Online </h1>
          <p className='text-sm font-normal mt-4' style={{ color: '#474B57' }}> Discover Our Newest Collection Today. </p>
          
          <Link to="/categories"><button className='text-white text-sm flex items-center justify-center rounded mt-12' style={{ backgroundColor: '#0E1422', width: '183px', height: '44px' }}>
            <span> View Collection </span>
            <img src="/images/ArrowRight.png" alt="right-arrow" className='pl-3' />
          </button></Link>
        </div>

        <img src="/images/Man.png" alt="man" style={{ width: '340px', height: '340px', marginTop: '98px' }} />
      </section>
 
      <section className='w-full flex items-center justify-center gap-16' style={{ backgroundColor: '#FFF', height: '440px' }}>
        <div className="max-w-sm p-6 bg-white mt-40 mb-40" style={{ height: '218px' }}>
            <img src="/images/HomeCardOne.png" alt="home-card-one" />
            <h1 className='font-semibold text-base mt-6'>Free Shipping</h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mt-4">
              Upgrade your style today and get FREE shipping on all orders! Don't miss out.
            </p>
        </div>

        <div className="max-w-sm p-6 bg-white mt-40 mb-40" style={{ height: '218px' }}>
            <img src="/images/HomeCardTwo.png" alt="home-card-two" />
            <h1 className='font-semibold text-base mt-6'>Satisfaction Guarantee</h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mt-4">
            Shop confidently with our Satisfaction Guarantee: Love it or get a refund.
            </p>
        </div>

        <div className="max-w-sm p-6 bg-white mt-40 mb-40" style={{ height: '218px' }}>
            <img src="/images/HomeCardThree.png" alt="home-card-three" />
            <h1 className='font-semibold text-base mt-6'>Secure Payment</h1>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mt-4">
            Your security is our priority. Your payments are secure with us.
            </p>
        </div>
      </section>

      <section className='w-full flex flex-col items-center'>
        <div className='flex flex-col text-center mb-6'>
          <span className='text-xs' style={{ color: '#878A92' }}>SHOP NOW</span>
          <h1 className='text-2xl font-bold mt-3'>Best Selling</h1>
        </div>

        <div className="grid grid-cols-4 gap-4 justify-between mt-24 mb-40">
            {Clothes.slice(0, 4).map((clothes) => (
            <Link to={`/items/${clothes.id}`} key={clothes.id}>
              <div className="flex flex-col gap-2 items-start bg-white p-4">
                <img src={clothes.image} alt={clothes.title} className="bg-gray-100 w-72" />
                <span className="font-medium text-secondary">{clothes.title}</span>
                <div className="flex gap-3 items-center">
                  <span className={`text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl ${clothes.instock ? 'bg-white' : 'bg-red-100'}`}>
                    {clothes.instock ? 'IN STOCK' : 'OUT OF STOCK'}
                  </span>
                  <span className="text-gray-400 font-normal">${clothes.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>


      <section className='w-full flex items-center justify-between px-32' style={{backgroundColor: '#F6F6F6', height: '304px'}}>
        <div style={{width: '450px'}}>
          <h1 className='text-2xl font-bold'>Browse Our Fashion Paradise!</h1>
          <p className='text-sm' style={{ color: '#5C5F6A' }}>Step into a world of style and explore our diverse collection of clothing categories.</p>
          <Link to="/categories">< button className='text-white text-sm flex items-center justify-center rounded mt-12' style={{ backgroundColor: '#0E1422', width: '183px', height: '44px' }}>
            <span> Start Browsing </span>
            <img src="/images/ArrowRight.png" alt="right-arrow" className='pl-3' />
          </button></Link>
        </div>

        <div>
        <img src="/images/Clothes_0.png" style={{ height: '311px', width: '225px' }} />
        </div>
      </section>


      <section className='w-full flex flex-col items-center'>
        <div className='flex text-center mt-40 gap-4'>
          <button className='border border-solid border-gray-200 rounded-full' style={{width:'92px', height:'31px'}}> Featured </button>
          <button className='font-light' style={{width:'92px', height:'31px', color:'#5C5F6A'}}> Latest </button>
        </div>

        <div className="grid grid-cols-4 gap-4 justify-between mt-12 mb-40">
            {Clothes.slice(4, 8).map((clothes) => (
            <Link to={`/items/${clothes.id}`} key={clothes.id}>
              <div className="flex flex-col gap-2 items-start bg-white p-4">
                <img src={clothes.image} alt={clothes.title} className="bg-gray-100 w-72" />
                <span className="font-medium text-secondary">{clothes.title}</span>
                <div className="flex gap-3 items-center">
                  <span className={`text-secondary font-medium border border-gray-300 px-3 py-1 rounded-3xl ${clothes.instock ? 'bg-white' : 'bg-red-100'}`}>
                    {clothes.instock ? 'IN STOCK' : 'OUT OF STOCK'}
                  </span>
                  <span className="text-gray-400 font-normal">${clothes.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>
      
    </main>
  );
};

export default Home;
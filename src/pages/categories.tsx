import React, { useState }  from 'react';
import ProductsApi from '../components/apifetch';

const Categories: React.FC = () => {

const categories = ["Perfume", "Trousers", "Shoes", "Handbag", "Hat", "Thermos"];

const [selectedColor, setSelectedColor] = useState <string | null> (null);

const [selectedSize, setSelectedSize] = useState <string | null> (null);
const sizes = ['S', 'M', 'L', 'XL'];
const sizes2 = ['XXL'];

const [price, setPrice] = useState(0); 


  return (
    <main className='mx-auto max-w-[1440px] px-5'>

      <section className='w-full gap-16 h-16 flex items-center' style={{ backgroundColor: '#F6F6F6' }}>
          <div className='flex items-center gap-3 mx-28'>
            <span className='text-slate-500'> Ecommerce </span>
            <img src="/images/Vector-right.png" alt="right-arrow" className='w-2 h-3' />
            <span> Search </span>
          </div>
      </section>    


      <section className='w-full gap-16 mt-11 px-28' style={{ backgroundColor: '#FFF', paddingBottom: '120px' }}>
        <div className='w-[248px] h-[828px] border border-solid border-[#E6E7E8] rounded-md px-6 py-7'>

          <h1 className='text-md'> Categories </h1>

          <ul className="w-[200px] h-[335px] mt-5">

              {categories.map((category, index) => (

                <li key={index} className="flex items-center gap-3 border-b border-[#E6E7E8]">
                    <input type="checkbox" id={`category-${index}`} className="w-[18px] h-[18px] border-2 rounded-sm mb-4 mt-4 cursor-pointer"/>
                    <span className="mb-4 mt-4 text-sm font-light">{category}</span>
                </li>

              ))}

          </ul>

          <div className='flex flex-col ms-1 mt-7'>
              <h1 className='text-md'> Color </h1>

                <div className='flex gap-4 mt-4'>
                      <button
                          onClick={() => setSelectedColor('#A3BEF8')}
                          className={`w-6 h-6 rounded-full bg-[#A3BEF8] transition duration-150 hover:bg-indigo-200 ${
                            selectedColor === '#A3BEF8' ? 'border border-black' : ''
                          }`}
                      ></button>
                      <button
                          onClick={() => setSelectedColor('#FFD58A')}
                          className={`w-6 h-6 rounded-full bg-[#FFD58A] transition duration-150 hover:bg-orange-100 ${
                            selectedColor === '#FFD58A' ? 'border border-black' : ''
                          }`}
                      ></button>
                      <button
                          onClick={() => setSelectedColor('#83B18B')}
                          className={`w-6 h-6 rounded-full bg-[#83B18B] transition duration-150 hover:bg-lime-100 ${
                            selectedColor === '#83B18B' ? 'border border-black' : ''
                          }`}
                      ></button>
                      <button
                          onClick={() => setSelectedColor('#4078FF')}
                          className={`w-6 h-6 rounded-full bg-[#4078FF] transition duration-150 hover:bg-blue-200 ${
                            selectedColor === '#4078FF' ? 'border border-black' : ''
                          }`}
                      ></button>                      
                 </div>
            </div>


            <div className='flex flex-col ms-1 mt-10'>
                      <h1 className='text-md'> Size </h1>
                      <div className="flex gap-2 mt-4">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-10 h-10 rounded-md border transition duration-150 ${
                            selectedSize === size ? 'border-black' : 'border-gray-200'
                            }`}>
                                {size}
                              </button>
                            ))}
                      </div>
              </div>

              <div className='flex flex-col ms-1 mt-2'>
                  {sizes2.map((size2) => (
                    <button
                        key={size2}
                        onClick={() => setSelectedSize(size2)}
                        className={`w-10 h-10 rounded-md border transition duration-150 ${
                        selectedSize === size2 ? 'border-black' : 'border-gray-200'
                        }`}>
                      {size2}
                    </button>
                      ))}
              </div>



              <div className="flex flex-col items-start w-full max-w-sm mx-auto ms-1 mt-8">
                <h1 className='text-md mb-3'> Price </h1> 

                <div className="relative w-full">

                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none"
                      />

                      <div
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded-md"
                        style={{ left: `${(price / 1000) * 100}%` }}
                      >
                        ${price}
                      </div>

                </div>

              </div>


              

        </div>
      </section>


    <ProductsApi/>
    </main>
  );
};

export default Categories;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clothes } from '../components/clothes';
import Counter from '../components/counter';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = Clothes.find(item => item.id.toString() === id);

  const [selectedColor, setSelectedColor] = useState <string | null> (null);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];


  if (!product) {
    return <div>Product not found</div>;
  }

  return (    
    <main className='mx-auto max-w-[1440px] px-5'>
      <section className='w-full gap-16' style={{ backgroundColor: '#FFF', paddingBottom: '200px' }}>
          <div className='flex items-center gap-3 mt-8 mx-28'>
            <span className='text-slate-500'> Ecommerce </span>
            <img src="/images/Vector-right.png" alt="right-arrow" className='w-2 h-3' />
            <span> Black man t-shirt </span>
          </div>

          <div className='mx-28 flex items-center justify-center gap-4' style={{ width:'1092px', height: '574px', marginTop: '30px' }}>
            <div className='flex items-center justify-center flex-col py-8 px-8' style={{ backgroundColor: '#F6F6F6', width:'574px', height: '574px' }}>
                <img src={product.image} alt={product.name} style={{ width:'374.4px', height:'471px' }}/>
                <img src="/images/Dots.png" alt="dots" />
            </div>

            <div className='flex items-start flex-col' style={{ width:'574px', height: '574px' }}>
              <div className='ps-28 items-start'>
                  <h1 className='text-2xl font-bold ms-1'>{product.name}</h1>

                  <div className='flex gap-2 mt-3 mb-6'>
                        <div className='rounded-full flex items-center justify-center gap-3' style={{ backgroundColor: '#F6F6F6', width:'167px', height:'28px' }}>
                            <img src="/images/Star.png" alt="star" />
                            <span className='font-medium text-xs text-slate-500'> 4.2 — 54 Reviews </span>
                        </div>

                        <span className="font-medium text-xs text-slate-500 border border-gray-300 px-3 py-1 rounded-3xl bg-white" style={{ height:'28px' }}>
                          {product.instock ? 'In Stock' : 'Out of Stock'}
                        </span>
                  </div>

                  <span className='text-lg font-semibold ms-2'>${product.price}</span>

                  <div className='flex flex-col ms-2 mt-8'>
                     <span className='text-xs font-medium text-slate-500'> AVAILABLE COLORS </span>

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
                     </div>
                  </div>


                  <div className='flex flex-col ms-2 mt-6'>
                      <span className='text-xs font-medium text-slate-500'> SELECT SIZE </span> 
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


                  <div className='flex flex-col ms-2 mt-8'>
                      <span className='text-xs font-medium text-slate-500'> QUANTITY </span> 
                      <div className='rounded-md'>
                        <Counter/>
                      </div>
                  </div>

                  <div className='flex items-center justify-center gap-4 ms-2 mt-12 mb-6'>
                     <button className='w-72 h-11 rounded-md flex items-center justify-center bg-[#0E1422] text-white transition duration-150 hover:bg-slate-800 active:bg-[#0E1422]'>
                         Add to cart
                      </button>

                     <button className='w-11 h-11 rounded-md border flex items-center justify-center transition duration-150 hover:bg-slate-50 active:bg-white'> 
                        <img src="/images/Heart.png" alt="Heart" />
                     </button>
                  </div>
                 

                  <span className='text-xs font-medium text-slate-500 ms-2'>— Free shipping on orders $100+</span>

 
              </div>
            </div>
          </div>
      </section>
    </main>
  );
};

export default Product;

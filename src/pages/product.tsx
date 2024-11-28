import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Clothes } from '../components/clothes';
import Counter from '../components/counter';
import { ClothesTypes } from '../types/clothestypes';
import { ProductApi } from '../types/clothesapitypes';
import { Link } from 'react-router-dom';


const Product: React.FC = () => {

  const location = useLocation();
  const { pathname } = location;

  const { id } = useParams<{ id: string }>();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const [selectedButton, setSelectedButton] = useState <string | null> (null);

  const colors: { name: string; hex: string }[] = [
    { name: 'Light Blue', hex: '#A3BEF8' },
    { name: 'Yellow', hex: '#FFD58A' },
    { name: 'Green', hex: '#83B18B' },
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const [products, setProducts] = useState<(ClothesTypes | ProductApi)[]>([]);



  useEffect(() => {

    const fetchProducts = async () => {

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }

        const data: ProductApi[] = await response.json();
        const formattedData = data.map((product) => ({
          ...product,
          instock: true,
        }));

        setProducts([...Clothes, ...formattedData]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }

    };


    fetchProducts();

  }, []);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  const product = products.find((product) => product.id.toString() === id);



  const handleAddToCart = () => {

    if (!selectedColor || !selectedSize) {
      alert('Please select a color and a size before adding to the cart.');
      return;
    }

    if (!product) {
      alert('Product not found.');
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = existingCart.findIndex(
      (cartItem: any) => cartItem.id === product.id && cartItem.size === selectedSize && cartItem.color === selectedColor
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: selectedSize,
        color: selectedColor,
        quantity,
      };
      existingCart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('Item added to cart!');

  };




  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className='mx-auto max-w-[1440px] px-5'>
      <section className='w-full gap-16' style={{ backgroundColor: '#FFF', paddingBottom: '120px' }}>
        <div className='flex items-center gap-3 mt-8 mx-28'>
          <span className='text-slate-500'> Ecommerce </span>
          <img src="/images/Vector-right.png" alt="right-arrow" className='w-2 h-3' />
          <span> Black man t-shirt </span>
        </div>

        <div className='mx-28 flex items-center justify-center gap-4' style={{ width:'1092px', height: '574px', marginTop: '30px' }}>
          <div className='flex items-center justify-center flex-col py-8 px-8' style={{ backgroundColor: '#F6F6F6', width:'574px', height: '574px' }}>
            <img src={product.image} alt={product.title} style={{ width:'374.4px', height:'471px' }}/>
            <img src="/images/Dots.png" alt="dots" />
          </div>

          <div className='flex items-start flex-col' style={{ width:'574px', height: '574px' }}>
            <div className='ps-28 items-start'>
              <h1 className='text-2xl font-bold ms-1'>{product.title}</h1>

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
                <div className="flex gap-4 mt-4">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.hex)}
                      className={`w-6 h-6 rounded-full bg-[${color.hex}] transition duration-150 hover:bg-opacity-80 ${
                        selectedColor === color.hex ? 'border border-black' : ''
                      }`}
                    ></button>
                  ))}
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

              {/* Quantity Counter */}
              <div className="mt-6 ms-2">
                <Counter
                  itemId={product.id}
                  quantity={quantity}
                  onIncrement={() => setQuantity((prev) => prev + 1)}
                  onDecrement={() => setQuantity((prev) => Math.max(1, prev - 1))}
                />
              </div>

              <div className="flex items-center justify-center gap-4 ms-2 mt-12 mb-6">
              <Link to={selectedColor && selectedSize ? "/shoppingcart" : "#"}>
                <button
                  onClick={handleAddToCart}
                  className="w-72 h-11 rounded-md flex items-center justify-center bg-[#0E1422] text-white transition duration-150 cursor-pointer hover:bg-slate-800 active:bg-[#0E1422]"
                  disabled={!selectedColor || !selectedSize}
                >
                  Add to cart
                </button>
              </Link>

              <button className="w-11 h-11 rounded-md border flex items-center justify-center transition duration-150 hover:bg-slate-50 active:bg-white">
                <img src="/images/Heart.png" alt="Heart" />
              </button>
            </div>
            <span className="text-xs font-medium text-slate-500 ms-2">— Free shipping on orders $100+</span>

            </div>
          </div>
        </div>
      </section>


      <section className='w-full gap-16' style={{ backgroundColor: '#FFF', paddingBottom: '120px' }}>
        <div className='flex items-center gap-3 mt-8 mx-28'>


          <div className='w-60 h-24 flex flex-col justify-between'>
            <button className={`flex items-center gap-2 w-60 h-10 rounded-md ps-6 bg-white transition duration-150 hover:bg-[#F6F6F6] active:bg-white ${selectedButton === "details" ? 'bg-[#F6F6F6]' : ''}`} onClick={() => setSelectedButton("details")}>
              <img src="/images/three-dots.png"/>
              <span> Details </span>
            </button>

            <button className={`flex items-center gap-2 w-60 h-10 rounded-md ps-6 bg-white transition duration-150 hover:bg-[#F6F6F6] active:bg-white ${selectedButton === "reviews" ? 'bg-[#F6F6F6]' : ''}`} onClick={() => setSelectedButton("reviews")}>
              <img src="/images/Empty-Star.png" />
              <span> Reviews </span>
            </button>
          </div>


          <div>
            {selectedButton === "details" ? (
               <div className='ms-8 flex flex-col' style={{ width: '727px' }}> 
                  <h1 className='font-medium mb-6'> Detail </h1>

                  <div className='flex flex-col'>
                      <span className='text-s font-normal text-slate-400'> 
                        Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. 
                        Crafted with meticulous attention to detail and designed for comfort,
                        these versatile black tees are a must-have addition to your collection.
                      </span>
                      <span className='text-s font-normal text-slate-400'>
                        The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, 
                        these black t-shirts are the perfect choice, effortlessly complementing any outfit.
                      </span>
                  </div>

                  <ul className='list-disc text-s font-normal text-slate-400 mt-16 ms-6'>
                    <li> Premium Quality </li>
                    <li> Versatile Wardrobe Staple </li>
                    <li> Available in Various Sizes </li>
                    <li> Tailored Fit </li>
                  </ul>

               </div>
            ) : 
            <div className='ms-8' style={{ width: '727px' }}>
            <div>
              <div className="flex flex-col gap-4">
                <h2 className='font-medium mb-2'>Reviews</h2>
                <div className="flex gap-3">
                  <h2 className="text-secondary font-bold text-3xl">4.2</h2>
                  <span className="text-gray-400 py-3">- 54 reviews</span>
                </div>
                <button className="w-36 h-11 py-3 px-5 mb-6 mt-4 border border-black text-sm text-secondary font-medium rounded-md transition duration-150 hover:bg-slate-50 active:bg-white">
                    Write a review
                  </button>
          
                <div className="border-t flex flex-col gap-6 items-center">

                  <div className='flex items-start mt-14' style={{ width: '727px' }}>
                    <img src="/images/Avatar.png" alt="avatar" className="mr-3" />
                    <div className='flex flex-col flex-grow'>
                      <span className="font-semibold">Emily Davis</span>
                      <span className="text-sm text-gray-400 mt-2">1 WEEK AGO</span>
                      <p className="text-gray-500 mt-4">This company always goes above and beyond to satisfy their customers.</p>
                    </div>
                    <img src="/images/review-stars.png" alt="review-stars" className="ml-3" />
                  </div>

                  <div className='flex items-start mt-14' style={{ width: '727px' }}>
                    <img src="/images/Avatar.png" alt="avatar" className="mr-3" />
                    <div className='flex flex-col flex-grow'>
                      <span className="font-semibold">Daniel Smith</span>
                      <span className="text-sm text-gray-400 mt-2">2 MONTHS AGO</span>
                      <p className="text-gray-500 mt-4">I can't believe how affordable and high-quality this item is!</p>
                    </div>
                    <img src="/images/review-stars.png" alt="review-stars" />
                  </div>
          
                  <div className='flex items-start mt-14' style={{ width: '727px' }}>
                    <img src="/images/Avatar.png" alt="avatar" className="mr-3" />
                    <div className='flex flex-col flex-grow'>
                      <span className="text-secondary font-semibold">Benjamin Clark</span>
                      <span className="text-sm text-gray-400 mt-2">23 APRIL</span>
                      <p className="text-gray-500 mt-4">These guys know their stuff, and it shows in their products.</p>
                    </div>
                    <img src="/images/review-stars.png" alt="review-stars" />
                  </div>

                  <button className='flex items-center justify-center border border-slate-400 w-44 h-11 mt-20 rounded-md text-gray-500 transition duration-150 hover:bg-slate-50 active:bg-white'> 
                    Load more reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
          
            }
          </div>


        </div>
      </section>
    </main>
  );
};

export default Product;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clothes } from '../components/clothes';
import { ClothesTypes } from '../types/clothestypes';
import { ProductApi } from "../types/clothesapitypes";
import { useLocation } from 'react-router-dom';

const Categories: React.FC = () => {

  const location = useLocation();
  const { pathname } = location;

  const categories = ["Perfume", "Trousers", "Shoes", "Handbag", "Hat", "Thermos"];

  const [products, setProducts] = useState<(ClothesTypes | ProductApi)[]>([]);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ['S', 'M', 'L', 'XL'];
  const sizes2 = ['XXL'];

  const [price, setPrice] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }

        const data: ProductApi[] = await response.json();

        const formattedData = data.map((product) => ({...product, instock: true}));

        setProducts([...Clothes, ...formattedData]);
      }
       catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(()=> {
    window.scrollTo(0, 0)
},[pathname])

  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (

    <main className='mx-auto max-w-[1440px] px-5'>

      <section className='w-full gap-16 h-16 flex items-center' style={{ backgroundColor: '#F6F6F6' }}>
        <div className='flex items-center gap-3 mx-28'>
          <span className='text-slate-500'> Ecommerce </span>
          <img src="/images/Vector-right.png" alt="right-arrow" className='w-2 h-3' />
          <span> Search </span>
        </div>
      </section>

      <section className='w-full gap-16 mt-11 px-28 flex' style={{ backgroundColor: '#FFF', paddingBottom: '120px' }}>

        <div className='w-[248px] h-[828px] border border-solid border-[#E6E7E8] rounded-md px-6 py-7'>

          <h1 className='text-md'> Categories </h1>
          <ul className="w-[200px] h-[335px] mt-5">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center gap-3 border-b border-[#E6E7E8]">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  className="w-[18px] h-[18px] border-2 rounded-sm mb-4 mt-4 cursor-pointer"
                />
                <span className="mb-4 mt-4 text-sm font-light">{category}</span>
              </li>
            ))}
          </ul>

          <div className='flex flex-col ms-1 mt-7'>
            <h1 className='text-md'> Color </h1>
            <div className='flex gap-4 mt-4'>
              {["#A3BEF8", "#FFD58A", "#83B18B", "#4078FF"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full bg-[${color}] transition duration-150 ${
                    selectedColor === color ? 'border border-black' : ''
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <div className='flex flex-col ms-1 mt-10'>
            <h1 className='text-md'> Size </h1>
            <div className="flex gap-2 mt-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-md border ${
                    selectedSize === size ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className='flex flex-col ms-1 mt-2'>
              {sizes2.map((size2) => (
                <button
                  key={size2}
                  onClick={() => setSelectedSize(size2)}
                  className={`w-10 h-10 rounded-md border ${
                    selectedSize === size2 ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  {size2}
                </button>
              ))}
            </div>

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
                className="w-full h-1 bg-gray-300 rounded-lg appearance-none"
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




        <div className='w-[813px]'>

          <span> Applied Filters: </span>

          <div className='flex gap-4 mt-4 mb-6'>

              <div className='flex border w-[111px] h-[36px] rounded-full items-center justify-center gap-2 cursor-pointer'>
                <span className='text-sm'> Perfume </span>
                <img src="/images/close.png" alt="close" className='w-5 h-5'/>
              </div>

              <div className='flex border w-[111px] h-[36px] rounded-full items-center justify-center gap-2 cursor-pointer'>
                <span className='text-sm'> Size: M </span>
                <img src="/images/close.png" alt="close" className='w-5 h-5'/>
              </div>

          </div>

          <span className='text-sm text-[#5C5F6A]'> Showing 1-9 of 28 results. </span>

          

          <div className="grid grid-cols-3 gap-10 mt-8">
            {displayedProducts.map((product) => (
              <Link to={`/items/${product.id}`} key={product.id}>
                <div className="flex flex-col gap-2 items-start">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-72 h-72 object-cover bg-gray-100"
                  />
                  <span className="font-medium text-secondary">{product.title}</span>
                  <div className="flex gap-3 items-center">
                    <span className="text-gray-400 font-normal">${product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>


          <div className="flex justify-center mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-gray-100 mr-2"
            >
              Prev
            </button>
            <span className="px-4 py-2">{currentPage} / {totalPages}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-gray-100 ml-2"
            >
              Next
            </button>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Categories;

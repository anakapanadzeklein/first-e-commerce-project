import React, { useEffect, useState } from 'react';
import { ProductApi } from '../types/clothesapitypes';

const ProductsApi: React.FC = () => {
    
  const [products, setProducts] = useState <ProductApi[]> ([]);

  useEffect(() => {
    const fetchProducts = async () => {

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: ProductApi[] = await response.json();
        setProducts(data);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsApi;
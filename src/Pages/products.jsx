import React from 'react';
import CardProducts from '../components/Fragments/CardProducts';
import { useState } from 'react';

const products = [
  {
    id: 1,
    title: 'Lejing Trousers',
    price: 100,
    image: '/images/trousers_1.jpg',
    description: 'Lejing trousers are suitable for those of you who love long legs, especially those of you who like to eat giraffe',
  },
  {
    id: 2,
    title: 'Dress',
    price: 150,
    image: '/images/dress_1.jpg',
    description: 'This shirt is suitable for those of you who are women',
  },
  {
    id: 3,
    title: 'Dress',
    price: 150,
    image: '/images/dress_1.jpg',
    description: 'This shirt is suitable for those of you who are women',
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
  // nilai untuk menampilkan cart
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);
  // untuk menghendel button add to cart
  const handleAddToCart = (id) => {
    setCart([
      ...cart,
      {
        id,
        qty: 1,
      },
    ]);
  };

  // untuk menghendel button logout
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center h-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-8 shadow-md">
        <div className="text-xl">RilsShopp</div>
        <div className="flex items-center space-x-4">
          <span>{email}</span>
          <button className="ml-5 bg-red-600 hover:bg-red-500 transition-colors duration-300 text-white py-1 px-3 rounded-md" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Our Products</h1>

        {/* Product Grid */}
        <div className="flex justify-center py-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="w-3/4 flex flex-wrap">
            {products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header img={product.image} />
                <CardProducts.Body title={product.title} children={product.description} />
                <CardProducts.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
              </CardProducts>
            ))}
          </div>
          <div className="w-1/4  border border-blue-400 p-2">
            <h1 className="text-3xl font-bold text-blue-500 border border-blue-300 px-2 ml-2 mb-2">Cart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-5">
              <thead>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>${product.price}</td>
                      <td>{item.qty}</td>
                      <td>${item.qty * product.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

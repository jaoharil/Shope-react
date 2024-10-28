import React from 'react';
import CardProducts from '../components/Fragments/CardProducts';

const products = [
  {
    id: 1,
    title: 'Lejing Trousers',
    price: '$100',
    image: '/images/trousers_1.jpg',
    description: 'Lejing trousers are suitable for those of you who love long legs, especially those of you who like to eat giraffe',
  },
  {
    id: 2,
    title: 'Dress',
    price: '$150',
    image: '/images/dress_1.jpg',
    description: 'This shirt is suitable for those of you who are women',
  },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header img={product.image} />
              <CardProducts.Body title={product.title} children={product.description} />
              <CardProducts.Footer price={product.price} />
            </CardProducts>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

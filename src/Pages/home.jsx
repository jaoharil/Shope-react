// src/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Produk 1', price: 'Rp100,000', imageUrl: '/images/dress_1.jpg' },
  { id: 2, name: 'Produk 2', price: 'Rp200,000', imageUrl: '/images/trousers_1.jpg' },
  { id: 3, name: 'Produk 3', price: 'Rp150,000', imageUrl: '/images/image3.jpg' },
];

const Home = () => {
  const [email, setEmail] = useState('example@email.com');

  const handleLogout = () => {
    console.log('Logout berhasil');
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center h-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-8 shadow-md">
        <div className="text-xl">RilsShopp</div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="ml-5 bg-red-600 hover:bg-red-500 transition-colors duration-300 text-white py-1 px-3 rounded-md">
            Login
          </Link>
        </div>
      </div>

      {/* Welcome Content */}
      <div className="bg-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-center p-8 text-center md:text-left">
        <div className="md:w-2/3 w-80">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome RilsShopp!</h1>
          <p className="text-lg text-blue-500  mb-8">Temukan produk favorit Anda dengan harga terbaik dan kualitas terjamin. Selamat berbelanja!</p>
        </div>
        <img src="/images/home.png" alt="Welcome" className="md:w-3/3 w-72 h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
      </div>

      {/* About Section */}
      <div className="bg-white min-h-screen flex flex-col md:flex-row p-8 items-center">
        <div className="md:w-2/3 mb-8 md:mb-0 order-2 md:order-1">
          <h1 className="text-3xl font-bold text-blue-600">Tentang RilsShopp</h1>
          <p className="text-blue-500 mt-4">
            RilsShopp adalah toko online yang menyediakan berbagai produk berkualitas dengan harga terjangkau. Kami berkomitmen untuk memberikan pengalaman berbelanja yang mudah dan menyenangkan bagi Anda.
          </p>
          <p className="mt-6 text-blue-700">
            Kami menyediakan berbagai produk seperti pakaian, aksesori, dan banyak lagi, yang dipilih secara khusus untuk memenuhi kebutuhan Anda. Setiap produk yang kami jual telah melalui proses seleksi untuk memastikan kualitas terbaik.
          </p>
          <p className="mt-4 text-blue-700">Terima kasih telah mempercayakan kebutuhan belanja Anda kepada kami. Kami berharap Anda menikmati pengalaman berbelanja di RilsShopp.</p>
        </div>
        <img src="/images/about.jpeg" alt="About Us" className="md:w-1/3 w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 order-1 md:order-2" />
      </div>

      {/* Product Grid */}
      <div className="bg-white min-h-screen p-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-600">Toko Produk Kami</h1>
          <p className="text-blue-500">Temukan produk terbaik untuk Anda</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-blue-50 p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-blue-700">{product.name}</h2>
                <p className="text-blue-500 mt-2">{product.price}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Beli Sekarang</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

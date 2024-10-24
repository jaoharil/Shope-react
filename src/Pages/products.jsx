import React from 'react';
import CardProducts from '../components/Fragments/CardProducts';

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardProducts>
          <CardProducts.Header></CardProducts.Header>
          <CardProducts.Body></CardProducts.Body>
          <CardProducts.Footer></CardProducts.Footer>
        </CardProducts>
        <CardProducts>
          <CardProducts.Header></CardProducts.Header>
          <CardProducts.Body></CardProducts.Body>
          <CardProducts.Footer></CardProducts.Footer>
        </CardProducts>
        <CardProducts>
          <CardProducts.Header></CardProducts.Header>
          <CardProducts.Body></CardProducts.Body>
          <CardProducts.Footer></CardProducts.Footer>
        </CardProducts>
        <CardProducts>
          <CardProducts.Header></CardProducts.Header>
          <CardProducts.Body></CardProducts.Body>
          <CardProducts.Footer></CardProducts.Footer>
        </CardProducts>
      </div>
    </div>
  );
};

export default ProductsPage;

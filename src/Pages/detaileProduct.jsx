import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetaileProduct } from '../services/product.services';

const DetaileProductPage = () => {
  const { id } = useParams();
  // membuat usestate
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetaileProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  console.log(product);
  return (
    <>
      <div>
        <h1>detail : {id}</h1>
      </div>
    </>
  );
};

export default DetaileProductPage;

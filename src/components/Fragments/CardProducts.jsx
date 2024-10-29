import Button from '../Elements/Button';

const CardProducts = (props) => {
  const { children } = props;
  return <div className="bg-white shadow-md rounded-lg p-4 border my-2 mx-4 border-blue-500 max-w-xs mx-autoz flex flex-col ">{children}</div>;
};

const Header = (props) => {
  const { img } = props;
  return (
    <>
      <a href="#">
        <img src={img} alt="Product Image" className="w-full h-32 object-cover rounded-md mb-4 border border-blue-300" />
      </a>
    </>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <>
      <a href="#" className="h-full">
        <h2 className="text-md font-semibold mb-1 text-gray-700">{title}</h2>
        <p className="text-sm text-gray-500">{children}</p>
      </a>
    </>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className=" mt-4 ">
      <p className="text-gray-500 mb-2">${price}</p>
      <Button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-300 mt-auto" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </Button>
      {/* Additional Footer Links */}
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;

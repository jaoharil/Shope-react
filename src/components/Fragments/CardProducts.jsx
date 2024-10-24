import Button from '../Elements/Button';

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="grid  ">
      {/* Product card example */}
      <div className="bg-white shadow-md rounded-lg p-4 border border-blue-500 ">{children}</div>
    </div>
  );
};

const Body = () => {
  return (
    <a href="#">
      <h2 className="text-lg font-semibold mb-2">Product Name</h2>
      <p className="text-m">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quia, nulla quos accusantium veritatis?</p>
    </a>
  );
};

const Footer = () => {
  return (
    <div>
      <p className="text-gray-500 mb-4">$99.99</p>
      <Button classname="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</Button>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#">
        <img src="/images/trousers_1.jpg" alt="Product Image" className="w-full h-48 object-cover rounded-lg mb-4 border border-blue-500" />
      </a>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;

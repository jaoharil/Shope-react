import { Children } from 'react';

const Button = (props) => {
  const { children, classname = 'bg-black' } = props;

  return (
    <button className={`h-10 px-6 font-bold ${classname} text-white rounded-md`} type="submit">
      {children}
    </button>
  );
};

export default Button;

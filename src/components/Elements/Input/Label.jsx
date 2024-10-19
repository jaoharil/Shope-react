import { Children } from 'react';

const Label = (props) => {
  const { htmlfor, children } = props;
  return (
    <label htmlFor={htmlfor} className="block text-slate-500 text-xm font-bold mb-2">
      {children}
    </label>
  );
};
export default Label;

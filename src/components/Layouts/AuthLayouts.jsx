import { Children } from 'react';

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex gap-3 justify-center items-center min-h-screen bg-white">
      <div className="w-full px-10 py-10 max-w-xs bg-white border-2 border-blue-600 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">Welcome, please enter your details</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;

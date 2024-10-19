import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4 animate-pulse">Ooopps!!!</h1>
        <p className="text-xl text-red-500 mb-2">The page you are looking for is not available 😅</p>
        <p className="text-red-700 text-lg">{error.statusText || error.message}</p>
        <div className="mt-6">
          <a href="/" className="text-white border-2 border-red-600 px-4 py-2 hover:bg-red-600 transition-colors duration-300">
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;

import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/formLogin';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-center mt-1">
        Don't have an account?{' '}
        <Link to="/register" className="text-black font-bold">
          Sign up
        </Link>
      </p>
      <p className="text-center mt-1">
        <Link to="/" className="text-blue-500">
          Back To Home
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;

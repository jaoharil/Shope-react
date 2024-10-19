import AuthLayouts from '../components/Layouts/AuthLayouts';

import FormRegister from '../components/Fragments/FormRegister';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p>
        Already have an account!!!{' '}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;

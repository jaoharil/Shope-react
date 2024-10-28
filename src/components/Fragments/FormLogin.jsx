import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = '/products';
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="email" type="email" placeholder="example@gmail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="******" name="password" />
      <Button classname="bg-blue-500 w-full" type="submit">
        Login
      </Button>
      {/* <div className="py-2 flex justify-center items-cente">
        <p className=" px-1 ">Belum Punya Akun</p>
        <a href="http://" className="text-violet-400">
          Daftar
        </a>
      </div> */}
    </form>
  );
};

export default FormLogin;

import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="email" type="email" placeholder="example@gmail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="******" name="password" />
      <Button classname="bg-blue-500 w-full">Login</Button>
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

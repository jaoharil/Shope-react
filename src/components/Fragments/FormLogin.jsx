import InputForm from '../Elements/Input';
import Button from '../Elements/Button';
import { login } from '../../services/auth';
import { useEffect, useRef } from 'react';

const FormLogin = () => {
  const handleLogin = (event) => {
    // menyimpan ke local storage login
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // window.location.href = '/products';

    // ngpost data ke api
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
      } else {
        // menamapikan data jika gagal
        console.log(res.respon.data);
      }
    });
  };
  // const usernameRef = useRef(null);
  // useEffect(() => {
  //   usernameRef.current.focus();
  // }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="username" type="text" placeholder="username" name="username" />
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

import React from 'react';
import Button from './components/Elements/Button';

function App() {
  return (
    <div className="flex gap-3 justify-center items-center min-h-screen ">
      <div className="w-full px-10 py-10  max-w-xs bg-orange-300 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-600">RilsCoyy</h1>
        <p className="font-medium text-slate-500">Welcome, plase your enter details</p>
        <form action="">
          <div className="mb-6">
            <label htmlFor="email" className="block text-slate-500 text-xm font-bold mb-2">
              Email
            </label>
            <input type="text" className="text-xm border rounded w-full py-2 px-3 text-slate-700 opacity-50" placeholder="example@gmail.com" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-slate-500 text-xm font-bold mb-2">
              Password
            </label>
            <input type="password" className="text-xm border rounded w-full py-2 px-3 text-slate-700 opacity-50" placeholder="******" />
          </div>
          <Button classname="bg-red-400 w-full">Login</Button>
          <div className="py-2 flex justify-center items-cente">
            <p className=" px-1 ">Belum Punya Akun</p>
            <a href="http://" className="text-violet-400">
              Daftar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

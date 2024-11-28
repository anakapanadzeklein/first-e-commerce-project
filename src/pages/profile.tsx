import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


const Profile: React.FC = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate(); 

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const username = !isLogin ? (document.getElementById('username') as HTMLInputElement).value : '';

    
    if (!email || !password || (!isLogin && !username)) {
      alert('Please fill out all fields!');
      return; 
    }
    
    setFormSubmitted(true);

    if (isLogin) {
      alert('Successfully logged in!');
    } else {
      alert('Successfully registered!');
    }

    
    setTimeout(() => {
      navigate('/'); 
    }, 1000);
  };


  return (
    <main className="mx-auto max-w-[1440px] px-5">
      <section
        className="w-full h-40 flex flex-col items-start justify-center gap-2 mb-20"
        style={{ backgroundColor: '#F6F6F6', paddingBottom: '120px' }}
      >
        <h1 className="text-2xl font-semibold mt-28 mx-32">Profile</h1>
        <div className="flex items-center gap-3 mx-32">
          <span className="text-slate-500">Ecommerce</span>
          <img src="/images/Vector-right.png" alt="right-arrow" className="w-2 h-3" />
          <span>Profile</span>
        </div>
      </section>

      <div
        className="max-w-md mx-auto mt-8 p-6 bg-[#fff]"
        style={{ marginBottom: '120px' }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-3"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-3"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-md flex items-center justify-center bg-[#0E1422] text-white transition duration-150 cursor-pointer hover:bg-slate-800 active:bg-[#0E1422]"
            disabled={formSubmitted}
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            onClick={toggleForm}
            className="text-blue-500 font-medium cursor-pointer hover:underline"
          >
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </main>
  );
};

export default Profile;

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8 fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to TechStore</h2>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </p>
        </div>

        {isLogin ? (
          <LoginForm onToggle={toggleForm} />
        ) : (
          <SignupForm onToggle={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
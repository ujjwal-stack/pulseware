import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

const Navigation = () => {
    const { user, logout, navigateTo } = useAuth();
    const { getCartCount } = useCart();
    const [darkMode, setDarkMode] = useState(false);


    if (!user) {
        return null;
    }


    const handleCartClick = () => {
        navigateTo('cart');
    };

    const handleUserClick = () => {
        navigateTo('products');
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <button
                            onClick={handleUserClick}
                            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                        >

                            PulseWare
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Cart Button */}
                        <button
                            onClick={handleCartClick}
                            className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V19a2 2 0 002 2h7a2 2 0 002-2v-.5"
                                />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {getCartCount()}
                            </span>
                        </button>

                        {/* User Button */}
                        <button
                            onClick={handleUserClick}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </button>

                        {/* User Welcome Text */}
                        <span className="text-sm text-gray-600 hidden sm:block">
                            Welcome, {user.name}
                        </span>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transform transition"
                        >
                            {darkMode ? "🌙" : "☀️"}
                        </button>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
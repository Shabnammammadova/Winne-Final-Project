"use client";

import { useState } from "react";

export default function Auth() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    return (
        <div
            className={`flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200`}
        >
            <div
                className={`relative w-[768px] max-w-full min-h-[480px] rounded-[30px] shadow-xl bg-white overflow-hidden transition-all duration-700 ${isSignUpActive ? "active" : ""
                    }`}
            >
                {/* Sign Up Form */}
                <div
                    className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-700 ${isSignUpActive ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <form className="flex flex-col items-center justify-center h-full px-10">
                        <h1 className="text-2xl font-bold mb-4">Create Account</h1>
                        <div className="flex space-x-3 mb-4">
                            <a href="#" className="icon">
                                <i className="fa-brands fa-google-plus-g text-xl"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-github text-xl"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-linkedin-in text-xl"></i>
                            </a>
                        </div>
                        <span className="text-sm mb-4">or use your email for registration</span>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 mb-3 bg-gray-100 rounded-md outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 mb-3 bg-gray-100 rounded-md outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mb-3 bg-gray-100 rounded-md outline-none"
                        />
                        <button
                            type="button"
                            className="px-6 py-2 bg-indigo-600 text-white rounded-md uppercase font-semibold"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>

                {/* Sign In Form */}
                <div
                    className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-700 z-20 ${isSignUpActive ? "translate-x-full opacity-0 z-0" : "opacity-100"
                        }`}
                >
                    <form className="flex flex-col items-center justify-center h-full px-10">
                        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
                        <div className="flex space-x-3 mb-4">
                            <a href="#" className="icon">
                                <i className="fa-brands fa-google-plus-g text-xl"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-github text-xl"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa-brands fa-linkedin-in text-xl"></i>
                            </a>
                        </div>
                        <span className="text-sm mb-4">or use your email password</span>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 mb-3 bg-gray-100 rounded-md outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mb-3 bg-gray-100 rounded-md outline-none"
                        />
                        <a href="#" className="text-sm text-indigo-600 mb-4">
                            Forgot Your Password?
                        </a>
                        <button
                            type="button"
                            className="px-6 py-2 bg-indigo-600 text-white rounded-md uppercase font-semibold"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Toggle Section */}
                <div
                    className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 ${isSignUpActive ? "-translate-x-full" : ""
                        }`}
                >
                    <div
                        className={`absolute w-[200%] h-full bg-gradient-to-r from-indigo-400 to-indigo-600 text-white flex transition-transform duration-700 ${isSignUpActive ? "translate-x-1/2" : ""
                            }`}
                    >
                        <div className="w-1/2 flex flex-col items-center justify-center px-6">
                            <h1 className="text-2xl font-bold">Welcome Back!</h1>
                            <p className="text-sm mt-3 text-center">
                                Enter your personal details to use all of the site features
                            </p>
                            <button
                                className="mt-5 px-6 py-2 bg-transparent border border-white text-white rounded-md uppercase font-semibold"
                                onClick={() => setIsSignUpActive(false)}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="w-1/2 flex flex-col items-center justify-center px-6">
                            <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                            <p className="text-sm mt-3 text-center">
                                Register with your personal details to use all of the site
                                features
                            </p>
                            <button
                                className="mt-5 px-6 py-2 bg-transparent border border-white text-white rounded-md uppercase font-semibold"
                                onClick={() => setIsSignUpActive(true)}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

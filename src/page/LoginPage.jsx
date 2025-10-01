import FinanceIllustration from '../components/FinanceIllustration';
import {useAuthStore} from '../store/useAuthStore';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const CustomIllustration = () => (
    <div className="hidden lg:block lg:w-1/2">
        <FinanceIllustration />
    </div>
);
const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { login, isLoggingUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData)
  }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 sm:p-4 font-inter">

            <div className="w-full max-w-6xl shadow-2xl rounded-xl sm:rounded-3xl overflow-hidden bg-white/10 ring-4 ring-gray-900">


                <div className="bg-gray-800 p-2 pt-1 rounded-t-xl sm:rounded-t-3xl border-b-2 border-gray-700">
                    <div className="flex items-center justify-between">

                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-400 hidden sm:block">WalletWise - Login</div>
                        <div className="w-8"></div>
                    </div>
                </div>

                <div className="bg-white rounded-b-xl sm:rounded-b-3xl min-h-[60vh]">

                    <Header />

                    <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 p-4 sm:p-8 lg:p-16">


                        <div className="order-2 md:order-1 flex justify-center items-center p-6 rounded-xl bg-[#283149]">
                            <CustomIllustration />
                        </div>

                        <div className="order-1 md:order-2 flex flex-col justify-center py-4 sm:py-0">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-6">
                                <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                                    Welcome Back!
                                </h2>
                                <p className="text-gray-500">
                                    Log in to access your dashboard.
                                </p>

                                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full mb-2"></div>


                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        required
                                    />
                                </div>


                                

                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 text-lg font-medium text-white rounded-xl shadow-lg 
                           bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 
                           transition-all transform hover:scale-[1.01]"
                                >
                                    Sign In
                                </button>

                                <div className="text-center text-sm pt-2">
                                    <span className="text-gray-500">Don't have an account? </span>
                                    <Link to={"/signup"} className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                                        Sign Up
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
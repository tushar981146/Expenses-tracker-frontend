import FinanceIllustration from '../components/FinanceIllustration';

import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useState } from 'react';
import toast from 'react-hot-toast'
import { Eye, EyeOff } from 'lucide-react';


const CustomIllustration = () => (
  <div className="hidden lg:block lg:w-1/2">
    <FinanceIllustration />
  </div>
);
const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password.trim()) return toast.error("password is required and password must have at least 6 characters");
    if (formData.password.length < 6) return toast.error("password is required and password must have at least 6 characters");
    return true
  }


  const { signup } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sucess = validateForm();

    if (sucess === true) signup(formData)
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
            <div className="text-xs text-gray-400 hidden sm:block">WalletWise - signUp</div>
            <div className="w-8"></div>
          </div>
        </div>

        <div className="bg-white rounded-b-xl sm:rounded-b-3xl min-h-[60vh]">

          <Header />


          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8  sm:p-4 lg:p-16">


            <div className="order-2 md:order-1 flex justify-center items-center p-6 rounded-xl bg-[#283149]">
              <CustomIllustration />
            </div>

            <div className="order-1 md:order-2 flex flex-col justify-center  sm:py-0">
              <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-3">
                <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                  Create Your Account
                </h2>


                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full mb-2"></div>



                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"

                    />
                  </div>




                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>

                  <div>

                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="flex flex-row items-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required
                      />
                      <div className="" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff className="w-5 h-5 text-gray-600 cursor-pointer" /> : <Eye className="w-5 h-5 text-gray-600 cursor-pointer" />}
                      </div>

                    </div>
                  </div>
                  <div>

                    <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="flex flex-row items-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="confirm_password"
                        placeholder="Enter confirm your password"
                        value={formData.confirm_password}
                        onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required
                      />
                      <div className="" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff className="w-5 h-5 text-gray-600 cursor-pointer" /> : <Eye className="w-5 h-5 text-gray-600 cursor-pointer" />}
                      </div>

                    </div>
                  </div>



                  <button
                    type="submit"
                    className="w-full cursor-pointer px-4 py-3 text-lg font-medium text-white rounded-xl shadow-lg 
                           bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 
                           transition-all transform hover:scale-[1.01]"
                  >
                    sign Up
                  </button>

                </form>

                <div className="text-center text-sm pt-2">
                  <span className="text-gray-500">already have an account? </span>
                  <Link to={"/login"} className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                    Sign In
                  </Link>
                </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
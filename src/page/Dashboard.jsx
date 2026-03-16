import FeatureCard from '../components/FeaturesCard';
import { ListChecks, Cloud, Calendar, Wallet, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const FinanceIllustration = () => (
    <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Abstract Wave Background (Soft Blue/Purple) */}
        <path d="M0 300C120 280 250 150 500 180V300H0Z" fill="#E0E7FF" opacity="0.6"/>
        <circle cx="450" cy="280" r="150" fill="#C7D2FE" opacity="0.3"/>
        
        {/* Piggy Bank (Pink) */}
        <g transform="translate(250, 180)">
            <circle cx="0" cy="0" r="60" fill="#F9A8D4"/>
            <rect x="-30" y="-70" width="10" height="20" rx="3" fill="#DB2777"/> {/* Slot */}
            <circle cx="-15" cy="5" r="5" fill="#DB2777"/> {/* Eye 1 */}
            <circle cx="15" cy="5" r="5" fill="#DB2777"/> {/* Eye 2 */}
            <circle cx="0" cy="20" r="15" fill="#DB2777" opacity="0.2"/> {/* Snout shadow */}
            <circle cx="0" cy="20" r="10" fill="#EC4899"/> {/* Snout */}
            <path d="M-5 40 L-15 55 L-5 55 Z" fill="#DB2777"/> {/* Leg 1 */}
            <path d="M15 40 L5 55 L15 55 Z" fill="#DB2777"/> {/* Leg 2 */}
        </g>
        
        {/* Stack of Coins (Gold) */}
        <g transform="translate(150, 240)">
            <circle cx="0" cy="0" r="20" fill="#FBBF24"/>
            <circle cx="0" cy="0" r="15" fill="#F59E0B"/>
            <circle cx="-10" cy="-15" r="20" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2"/>
            <circle cx="-10" cy="-15" r="15" fill="#F59E0B"/>
            <circle cx="20" cy="-10" r="25" fill="#FBBF24" stroke="#F59E0B" strokeWidth="3"/>
        </g>
        
        {/* Mobile Phone Mockup (Dark/Blue) */}
        <g transform="translate(100, 50)">
            <rect x="0" y="0" width="150" height="220" rx="15" fill="#1F2937" stroke="#374151" strokeWidth="4"/>
            <rect x="10" y="10" width="130" height="200" rx="10" fill="#FFFFFF"/>
            
            {/* Screen Content (Checklist/Graph) */}
            <rect x="25" y="25" width="100" height="15" rx="4" fill="#6366F1"/> {/* Graph bar 1 (Tallest) */}
            <rect x="25" y="50" width="90" height="15" rx="4" fill="#A5B4FC" opacity="0.8"/> {/* Graph bar 2 */}
            
            {/* Checklist Items */}
            <path d="M35 90 L30 95 L40 85 Z" stroke="#10B981" strokeWidth="2" fill="none"/>
            <rect x="50" y="85" width="60" height="10" rx="2" fill="#E5E7EB"/>
            
            <path d="M35 115 L30 120 L40 110 Z" stroke="#10B981" strokeWidth="2" fill="none"/>
            <rect x="50" y="110" width="75" height="10" rx="2" fill="#E5E7EB"/>

            <path d="M35 140 L30 145 L40 135 Z" stroke="#10B981" strokeWidth="2" fill="none"/>
            <rect x="50" y="135" width="50" height="10" rx="2" fill="#E5E7EB"/>
        </g>
    </svg>
);






const Dashboard = () => {
    
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-4 font-inter scroll-smooth">

            <div className="w-full  shadow-2xl rounded-xl sm:rounded-3xl overflow-hidden bg-white/10 ring-4 ring-gray-900">
                
 
                <div className="bg-gray-800 p-2 pt-1 rounded-t-xl sm:rounded-t-3xl border-b-2 border-gray-700">
                    <div className="flex items-center justify-between">

                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-400 hidden sm:block">WalletWise - Track & Save</div>
                        <div className="w-8"></div> 
                    </div>
                </div>

              
                <div className="bg-white rounded-b-xl sm:rounded-b-3xl min-h-screen w-full">
                    
                    <Header />
                    
                    <div className="grid md:grid-cols-2 gap-8 p-4 sm:p-8 lg:p-16">
                        
                        <div className="order-2 md:order-1 flex justify-center items-center">
                            <FinanceIllustration />
                        </div>

                        <div className="order-1 md:order-2 flex flex-col justify-center space-y-6 sm:space-y-8">
                            
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                WalletWise: <span className="text-indigo-600">Track & Save</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-500 max-w-md">
                                Your personal expense manager for a healthier financial life. Achieve your goals with smart tools.
                            </p>

                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                                <Link to="/signup" className="w-full cursor-pointer sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white rounded-xl shadow-lg 
                                                   bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 
                                                   transition-all transform hover:scale-105">
                                    Sign Up
                                </Link>
                                <Link to="/login" className="w-full cursor-pointer sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-indigo-600 bg-indigo-50 rounded-xl 
                                                   ring-1 ring-indigo-300 hover:bg-indigo-100 transition-colors">
                                    Log In
                                </Link>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gray-200">
                                <FeatureCard icon={ListChecks} title="Easy Tracking" />
                                <FeatureCard icon={Cloud} title="Secure Data" />
                                <FeatureCard icon={Calendar} title="Smart Saving" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

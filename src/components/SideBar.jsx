import { LayoutDashboard, DollarSign, BarChart3, Settings, Wallet, X, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, current: true },
        { name: 'Expenses', icon: DollarSign, current: false },
        { name: 'Reports', icon: BarChart3, current: false },
        { name: 'Profile_Settings', icon: Settings, current: false },
    ];

    const { logout } = useAuthStore()

    return (
        <div className={`fixed min-h-[80vh] inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30 
                        w-64 bg-indigo-800 shadow-xl p-4 flex flex-col h-full rounded-r-2xl md:rounded-r-none`}>
            
            {/* Header and Close Button (Mobile) */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                    <Wallet className="w-7 h-7 text-indigo-200" />
                    <span className="text-2xl font-bold text-white">WalletWise</span>
                </div>
                <button onClick={toggleMenu} className="md:hidden text-indigo-200 p-2 rounded hover:bg-indigo-700 transition-colors">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={`/${item.name.toLowerCase()}`}
                        className={`flex items-center space-x-3 p-3 rounded-xl transition-all font-medium 
                            ${item.current 
                                ? 'bg-indigo-600 text-white shadow-md' 
                                : 'text-indigo-200 hover:bg-indigo-700 hover:text-white'}`
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Logout/Footer Area */}
            <div className="pt-4 border-t border-indigo-700">
                <button
                    onClick={logout}
                    className="flex items-center space-x-3 p-3 rounded-xl text-indigo-200 hover:bg-indigo-700 hover:text-white transition-colors font-medium"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
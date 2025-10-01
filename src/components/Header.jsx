import { Wallet } from 'lucide-react';


const Header = () => (
    <nav className="flex justify-between items-center py-4 px-4 sm:px-6">
        <div className="flex items-center space-x-2">
            <Wallet className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">WalletWise</span>
        </div>
        
    </nav>
);

export default Header;
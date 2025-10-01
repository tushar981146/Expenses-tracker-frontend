import { Menu, User, Ellipsis } from 'lucide-react'
import { useAuthStore } from '../store/useAuthStore';


function Head({ toggle }) {

    const { authUser, ischeckingAuth } = useAuthStore();

    
   
  return (
    <header className="flex justify-between items-center mb-6 border-b pb-4">
                            <button onClick={toggle} className="md:hidden text-gray-800 p-2 rounded hover:bg-gray-100 transition-colors">
                                <Menu className="w-6 h-6" />
                            </button>
                            <h1 className="text-2xl font-semibold text-gray-800 hidden md:block">Dashboard Overview</h1>
                            
                            <div className="flex items-center space-x-4">
                                <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                                    <span className="font-medium">Welcome, {ischeckingAuth ? <Ellipsis /> : authUser?.fullName }!</span>
                                </div>
                                <div className="p-1 rounded-full bg-gray-200 border border-indigo-600">
                                    
                                <img
                                    src={authUser?.profilePic || "/avatar.png"}
                                    alt="Profile"
                                    className="size-12 rounded-full object-cover"
                                />
                                </div>
                            </div>
                        </header>
  )
}

export default Head
import React, { useState, useEffect } from 'react';

import {
    LayoutDashboard, Menu, User,
    Wallet, PlusCircle, ArrowUpRight, ArrowDownLeft
} from 'lucide-react';

import Sidebar from '../components/SideBar'; 
import Head from '../components/Head';
import { Outlet } from 'react-router-dom';
import HomePageHeader from '../components/HomePageHeader';











// --- Main Application Component ---
const HomePage = () => {
    

     const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
            if (isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return () => {
                document.body.style.overflow = 'auto';
            };
        }, [isMenuOpen]);

    // Ensure body scrolling is prevented when mobile menu is open
    

    return (
       <div className="h-screen bg-gray-100 flex flex-col font-inter overflow-hidden">
  <div className="w-full max-w-7xl mx-auto shadow-2xl rounded-xl sm:rounded-3xl overflow-hidden bg-white/10 ring-4 ring-gray-900 flex-1">
    <div className="flex h-full bg-white rounded-b-xl sm:rounded-b-3xl">
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <Head toggle={toggleMenu} />
        <Outlet />
      </div>
    </div>
  </div>
</div>

    );
};

export default HomePage;

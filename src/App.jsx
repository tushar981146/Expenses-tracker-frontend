import { Loader } from 'lucide-react'
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from "./page/HomePage"
import SignUpPage from "./page/SignUpPage"
import LoginPage from "./page/LoginPage"
import Dashboard from './page/Dashboard';
import Report from './components/Report';
import TransactionsTable from './components/TransactionsTable';
import HomeDashboard from './components/HomeDashboard';
import ProfileSetting from './components/ProfileSetting';
import Lists from './components/Lists';

function App() {
  
  const { authUser, checkAuth, ischeckingAuth, } = useAuthStore();

 
  
  useEffect(() => {
    checkAuth();
    console.log(authUser);
    
  }, [checkAuth]);

  if(ischeckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }
  return (
    <div className='overflow-y-hidden'>
     {/* { authUser && <Navbar /> } */}

      <Routes>
        <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/dashboard" />} >

          <Route index element={authUser ? <HomeDashboard /> : <Navigate to="/dashboard" />} />
          <Route path="expenses" element={authUser ? <Lists /> : <Navigate to="/dashboard" />} />
          <Route path="expenses/:id" element={authUser ? <TransactionsTable/> : <Navigate to="/dashboard" />} />
          <Route path="reports" element={authUser ? <Report /> : <Navigate to="/dashboard" />} />
          <Route path="profile_settings" element={authUser ? <ProfileSetting /> : <Navigate to="/dashboard" />} />
        </Route>
        <Route path="/dashboard" element={ !authUser ? <Dashboard /> : <Navigate to="/" /> } />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
     

      </Routes>

      <Toaster />
    </div>
  )
}

export default App

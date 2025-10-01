import React, { useState } from 'react';
import { Camera, Mail, Lock, CheckCircle, User } from 'lucide-react';
import InputField from './InputField';
import Sidebar from './SideBar';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/useAuthStore';

// --- Settings Component ---

const ProfileSetting = () => {
    const [name, setName] = useState('');
    const [selectedimage, setSelectedImage] = useState(null);

    const [generalData, setGeneralData] = useState({
    fullName: '',
    email: '',
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });


    const { authUser, isUpdatingProfile, updateProfile, isGeneralUpdating, generalUpdate, passwordUpdate } = useAuthStore();


    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
            const base64Image = reader.result;
            setSelectedImage(base64Image)
            await updateProfile({ profilePic: base64Image });
        }
    };


    const handleSaveChanges = (e) => {
        e.preventDefault();
        generalUpdate(generalData)
        
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error("New passwords do not match!");
            return;
        }
        passwordUpdate(passwordData);
        
    };

    

    return (
        <div className="max-w-4xl mx-auto py-4 overflow-y-auto">



            <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">
                <form onSubmit={handleSaveChanges}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="md:col-span-2 flex items-center space-x-6 pb-4">
                            <div className="relative w-20 h-20 rounded-full flex items-center justify-center border-4 border-indigo-500 overflow-hidden">

                                <img
                                    src={selectedimage || authUser.profilePic || "/avatar.png"}
                                    alt="Profile"
                                    className="size-32 rounded-full object-cover border-4 "
                                />

                                <label
                                    htmlFor="avatar-upload"
                                    className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
                                >
                                    <Camera className="w-5 h-5 text-base-200" />
                                    <input
                                        type="file"
                                        id="avatar-upload"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        disabled={isUpdatingProfile}
                                    />
                                </label>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">Profile Picture</h3>
                                <p className="text-sm text-gray-500 mb-2">JPG or PNG allowed. Max size 5MB.</p>
                                <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                    <Camera className="w-4 h-4 mr-2" />
                                    Change Photo
                                    <input type="file" className="sr-only" accept="image/png, image/jpeg" />
                                </label>
                            </div>
                        </div>

                        {/* Name Input */}
                        <InputField
                            label="Full Name"
                            value={generalData.fullName}
                            onChange={(e) => setGeneralData({ ...generalData, fullName: e.target.value })}
                            placeholder="Enter your full name"
                            icon={User}
                        />

                        {/* Email Input */}
                        <InputField
                            label="Email Address"
                            type="email"
                            value={generalData.email}
                            onChange={(e) => setGeneralData({ ...generalData, email: e.target.value })}
                            placeholder="Enter your email"
                            icon={Mail}
                        />
                    </div>

                    <div className="mt-6 pt-4 border-t flex justify-end">
                        <button
                            onClick={handleSaveChanges}
                            type="submit"
                            className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Save General Changes
                        </button>
                    </div>
                </form>
            </div>

            {/* Security Card */}
            <div className="bg-white shadow-xl rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2 border-b pb-3 mb-4">
                    <Lock className="w-6 h-6 text-indigo-600" />
                    <span>Security & Password</span>
                </h2>
                <form onSubmit={handlePasswordChange}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Old Password */}
                        <InputField
                            label="Current Password"
                            type="password"
                            value={passwordData.oldPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                            placeholder="••••••••"
                            icon={Lock}
                        />
                        <div className="hidden md:block"></div> {/* Spacer */}

                        {/* New Password */}
                        <InputField
                            label="New Password"
                            type="password"
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                            placeholder="Enter new password"
                            icon={Lock}
                        />

                        {/* Confirm New Password */}
                        <InputField
                            label="Confirm New Password"
                            type="password"
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                            placeholder="Confirm new password"
                            icon={Lock}
                        />
                    </div>

                    <div className="mt-6 pt-4 border-t flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default ProfileSetting;

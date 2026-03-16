import React from 'react'

function HomePageHeader() {
    return (
        <div className="bg-gray-800 p-2 pt-1 rounded-t-xl sm:rounded-t-3xl border-b-2 border-gray-700">
            <div className="flex items-center justify-between">
                {/* Traffic light buttons */}
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                {/* Updated title in the bezel */}
                <div className="text-xs text-gray-400 hidden sm:block">WalletWise - Dashboard</div>
                <div className="w-8"></div> {/* Spacer */}
            </div>
        </div>
    )
}

export default HomePageHeader
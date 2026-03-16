import React, { useEffect, useState, useCallback } from 'react';
import { LogOut, RefreshCw, ShieldAlert, ArrowRight } from 'lucide-react';

const sessionError = () => {
  const [countdown, setCountdown] = useState(10);
  const [isClearing, setIsClearing] = useState(false);

  // Use a safe fallback for the login URL to prevent location errors
  const LOGIN_URL = window.location.origin + "/login";

  const handleManualRedirect = useCallback(() => {
    try {
      window.location.href = LOGIN_URL;
    } catch (e) {
      window.location.assign("/login");
    }
  }, [LOGIN_URL]);

  useEffect(() => {
    // 1. Clear session storage immediately
    const clearSession = () => {
      setIsClearing(true);
      try {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user_data');
      } catch (err) {
        console.warn("Storage access denied:", err);
      } finally {
        setIsClearing(false);
      }
    };

    clearSession();

    // 2. Countdown logic
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleManualRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [handleManualRedirect]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      {/* Responsive Container: Full width on mobile, constrained on larger screens */}
      <div className="w-full max-w-[95%] sm:max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transition-all duration-300">
        
        {/* Accent Bar */}
        <div className="h-1.5 sm:h-2 bg-amber-500 w-full" />
        
        <div className="p-6 sm:p-8 md:p-10 text-center">
          {/* Animated Icon Container */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-100 rounded-full scale-125 sm:scale-150 animate-pulse opacity-50" />
              <div className="relative bg-white p-3 sm:p-4 rounded-full shadow-sm border border-amber-100">
                <ShieldAlert className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500" />
              </div>
            </div>
          </div>

          {/* Typography: Fluid font sizes */}
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">
            Session Expired
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mb-6 sm:mb-8 leading-relaxed px-2">
            Your security token is no longer valid. For your protection, you have been automatically logged out.
          </p>

          {/* Responsive Status Box */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-slate-100">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-slate-600 mb-4">
              {isClearing ? (
                <RefreshCw className="w-4 h-4 animate-spin text-blue-500" />
              ) : (
                <LogOut className="w-4 h-4 text-slate-400" />
              )}
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                {isClearing ? "Cleaning Session..." : "Redirecting to login"}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-1.5 sm:h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-1000 ease-linear"
                style={{ width: `${(countdown / 10) * 100}%` }}
              />
            </div>
            
            <p className="mt-3 text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-medium">
              Redirect in <span className="text-slate-700">{countdown}s</span>
            </p>
          </div>

          {/* Action Buttons: Large touch targets for mobile */}
          <div className="space-y-3">
            <button
              onClick={handleManualRedirect}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              Sign In Again
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-2 text-xs sm:text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors"
            >
              Didn't redirect? <span className="underline underline-offset-4">Refresh page</span>
            </button>
          </div>
        </div>

        {/* Responsive Footer */}
        <div className="px-6 py-3 sm:py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400">
            Secure Authentication Shield
          </span>
        </div>
      </div>
    </div>
  );
};

export default sessionError;
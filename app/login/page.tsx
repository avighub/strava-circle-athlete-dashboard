'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="flex items-center justify-center hidden md:flex">
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/login-hero.jpg" 
              alt="Athletes running, cycling, and swimming" 
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            {/* App Name */}
            <div>
              <h1 className="text-4xl font-bold text-foreground">StravaCircle</h1>
            </div>

            {/* Heading Text */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">
                Track Your Athletic Journey
              </h2>
              <p className="text-foreground/60 text-lg">
                Connect with Strava and unlock detailed analytics for all your activities
              </p>
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full h-12 bg-[#FC4C02] hover:bg-[#E63E00] text-white font-semibold text-base transition-all flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H6m6 5c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m-6 9h12v2H6v-2z" />
                  </svg>
                  Login with Strava
                </>
              )}
            </Button>

            {/* Disclaimer */}
            <p className="text-xs text-foreground/60 text-center leading-relaxed">
              By authorizing, we only access your public activities and we remove your data if you revoke the access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

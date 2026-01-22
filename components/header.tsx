'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Welcome back, Alex</h1>
        <p className="text-sm text-foreground/60">January 22, 2026</p>
      </div>

      <div className="flex items-center gap-4">
        {/* User Avatar */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold">
              AM
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-foreground">Alex Morgan</p>
              <p className="text-xs text-foreground/60">Premium Member</p>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
              <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                Settings
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors border-t border-border">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

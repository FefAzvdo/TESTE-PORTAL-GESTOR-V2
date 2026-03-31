import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export function TopNav() {
  return (
    <header className="h-20 bg-surface/80 backdrop-blur-md border-b border-surface-container-low px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="relative w-96 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Search workspace..." 
          className="w-full bg-surface-container-low border-none rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-colors">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-surface"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-surface-container-low"></div>

        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right">
            <p className="text-sm font-semibold">Fernando Augusto</p>
            <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">System Administrator</p>
          </div>
          <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center overflow-hidden border border-surface-container-low">
            <User size={20} className="text-on-surface-variant" />
          </div>
        </div>
      </div>
    </header>
  );
}

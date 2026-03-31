import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Heart, 
  UserRound, 
  Store, 
  Settings, 
  ChevronRight,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'User Directory', path: '/users' },
  { icon: Heart, label: 'Social Benefits', path: '/benefits' },
  { icon: UserRound, label: 'Beneficiaries', path: '/beneficiaries' },
  { icon: Store, label: 'Partner Stores', path: '/stores' },
];

export function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-surface-container-lowest border-r border-surface-container-low flex flex-col sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
            W
          </div>
          <div>
            <h1 className="text-lg font-display font-bold leading-tight">Workspace</h1>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Management Console</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={cn("transition-transform duration-200 group-hover:scale-110")} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              <ChevronRight size={14} className={cn("opacity-0 transition-all duration-200", "group-hover:opacity-100")} />
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8 border-t border-surface-container-low">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-on-surface-variant hover:text-destructive transition-colors rounded-xl hover:bg-destructive/5 group">
          <LogOut size={20} />
          <span className="font-medium text-sm">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

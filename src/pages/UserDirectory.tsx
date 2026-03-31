import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Mail, 
  Phone, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const users = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Administrator', status: 'Active', lastActive: '2 mins ago' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Moderator', status: 'Inactive', lastActive: '2 days ago' },
  { id: '3', name: 'Charlie Davis', email: 'charlie@example.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'User', status: 'Active', lastActive: '5 mins ago' },
  { id: '5', name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User', status: 'Pending', lastActive: 'Never' },
  { id: '6', name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'User', status: 'Active', lastActive: '10 mins ago' },
  { id: '7', name: 'George Costanza', email: 'george@example.com', role: 'Editor', status: 'Active', lastActive: '3 hours ago' },
  { id: '8', name: 'Hannah Abbott', email: 'hannah@example.com', role: 'User', status: 'Inactive', lastActive: '1 week ago' },
];

export default function UserDirectory() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold">User Directory</h2>
          <p className="text-on-surface-variant mt-1">Manage and monitor all workspace members in one place.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus size={18} />
          Add New User
        </button>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl border border-surface-container-low shadow-sm overflow-hidden">
        <div className="p-6 border-b border-surface-container-low flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, email, or role..." 
              className="w-full bg-surface-container-low border-none rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-low rounded-xl text-sm font-semibold hover:bg-surface-container-low/80 transition-colors">
              <Filter size={18} />
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-low rounded-xl text-sm font-semibold hover:bg-surface-container-low/80 transition-colors">
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>User Info</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="group">
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">{user.name}</p>
                        <p className="text-xs text-on-surface-variant font-medium">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-primary" />
                      <span className="text-sm font-medium">{user.role}</span>
                    </div>
                  </td>
                  <td>
                    <span className={cn(
                      "text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider",
                      user.status === 'Active' ? "text-emerald-600 bg-emerald-50" : 
                      user.status === 'Pending' ? "text-amber-600 bg-amber-50" : 
                      "text-slate-600 bg-slate-50"
                    )}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <span className="text-sm text-on-surface-variant font-medium">{user.lastActive}</span>
                  </td>
                  <td className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                        <Mail size={16} />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-surface-container-low flex items-center justify-between">
          <p className="text-sm text-on-surface-variant font-medium">
            Showing <span className="text-on-surface font-bold">1-8</span> of <span className="text-on-surface font-bold">124</span> users
          </p>
          <div className="flex gap-2">
            <button className="p-2 bg-surface-container-low rounded-xl text-on-surface-variant hover:text-primary transition-colors disabled:opacity-50" disabled>
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 bg-surface-container-low rounded-xl text-on-surface-variant hover:text-primary transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

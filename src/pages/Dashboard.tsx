import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  Users, 
  UserPlus, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../lib/utils';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
];

const stats = [
  { label: 'Total Users', value: '12,450', change: '+12%', trend: 'up', icon: Users },
  { label: 'Active Benefits', value: '842', change: '+5%', trend: 'up', icon: TrendingUp },
  { label: 'New Registrations', value: '1,205', change: '-2%', trend: 'down', icon: UserPlus },
  { label: 'System Uptime', value: '99.9%', change: 'Stable', trend: 'neutral', icon: Activity },
];

const recentRegistrations = [
  { id: '1', name: 'Alice Johnson', role: 'Beneficiary', status: 'Active', date: '2026-03-31' },
  { id: '2', name: 'Bob Smith', role: 'Merchant', status: 'Pending', date: '2026-03-30' },
  { id: '3', name: 'Charlie Davis', role: 'Admin', status: 'Active', date: '2026-03-29' },
  { id: '4', name: 'Diana Prince', role: 'Beneficiary', status: 'Active', date: '2026-03-28' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold">System Overview</h2>
          <p className="text-on-surface-variant mt-1">Welcome back, Fernando. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-surface-container-lowest border border-surface-container-low rounded-xl text-sm font-semibold hover:bg-surface-container-low transition-colors shadow-sm">
            Export Report
          </button>
          <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Generate New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface-container-lowest p-6 rounded-3xl border border-surface-container-low shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-surface-container-low rounded-2xl group-hover:bg-primary/10 transition-colors">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",
                stat.trend === 'up' ? "text-emerald-600 bg-emerald-50" : 
                stat.trend === 'down' ? "text-rose-600 bg-rose-50" : 
                "text-slate-600 bg-slate-50"
              )}>
                {stat.trend === 'up' && <ArrowUpRight size={14} />}
                {stat.trend === 'down' && <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <p className="text-on-surface-variant text-sm font-medium">{stat.label}</p>
            <h3 className="text-2xl font-display font-bold mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl border border-surface-container-low shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-display font-bold">Growth Analytics</h3>
            <select className="bg-surface-container-low border-none rounded-xl px-4 py-2 text-xs font-semibold outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option>Last 7 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f3f6" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#44474e', fontSize: 12, fontWeight: 500 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#44474e', fontSize: 12, fontWeight: 500 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f1f3f6' }}
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    borderRadius: '16px', 
                    border: '1px solid #f1f3f6',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    padding: '12px'
                  }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#0052cc' : '#e2e8f0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-surface-container-low shadow-sm">
          <h3 className="text-xl font-display font-bold mb-6">New Registrations</h3>
          <div className="space-y-6">
            {recentRegistrations.map((reg) => (
              <div key={reg.id} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {reg.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">{reg.name}</p>
                    <p className="text-xs text-on-surface-variant font-medium">{reg.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider",
                    reg.status === 'Active' ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"
                  )}>
                    {reg.status}
                  </span>
                  <p className="text-[10px] text-on-surface-variant mt-1 font-medium">{reg.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-surface-container-low text-on-surface text-sm font-semibold rounded-xl hover:bg-surface-container-low/80 transition-colors">
            View All Registrations
          </button>
        </div>
      </div>
    </div>
  );
}

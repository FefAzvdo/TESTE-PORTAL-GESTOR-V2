import React from 'react';
import { 
  UserRound, 
  Plus, 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  MoreVertical,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { cn } from '../lib/utils';

const beneficiaries = [
  { id: '1', name: 'Alice Johnson', location: 'New York, NY', program: 'Healthcare Support', date: '2026-03-31', status: 'Approved' },
  { id: '2', name: 'Bob Smith', location: 'Los Angeles, CA', program: 'Education Grant', date: '2026-03-30', status: 'Pending' },
  { id: '3', name: 'Charlie Davis', location: 'Chicago, IL', program: 'Housing Assistance', date: '2026-03-29', status: 'Approved' },
  { id: '4', name: 'Diana Prince', location: 'Houston, TX', program: 'Healthcare Support', date: '2026-03-28', status: 'Approved' },
  { id: '5', name: 'Ethan Hunt', location: 'Phoenix, AZ', program: 'Food Security', date: '2026-03-27', status: 'Reviewing' },
];

export default function Beneficiaries() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold">Beneficiary Registry</h2>
          <p className="text-on-surface-variant mt-1">Track and manage individuals enrolled in social programs.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus size={18} />
          Register Beneficiary
        </button>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl border border-surface-container-low shadow-sm overflow-hidden">
        <div className="p-6 border-b border-surface-container-low flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, location, or program..." 
              className="w-full bg-surface-container-low border-none rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-low rounded-xl text-sm font-semibold hover:bg-surface-container-low/80 transition-colors">
            <Filter size={18} />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Beneficiary</th>
                <th>Location</th>
                <th>Program</th>
                <th>Enrolled Date</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {beneficiaries.map((ben) => (
                <tr key={ben.id} className="group">
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        {ben.name.charAt(0)}
                      </div>
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors">{ben.name}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <MapPin size={16} />
                      <span className="text-sm font-medium">{ben.location}</span>
                    </div>
                  </td>
                  <td>
                    <span className="text-sm font-medium">{ben.program}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{ben.date}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      {ben.status === 'Approved' ? (
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      ) : (
                        <Clock size={16} className="text-amber-500" />
                      )}
                      <span className={cn(
                        "text-sm font-semibold",
                        ben.status === 'Approved' ? "text-emerald-600" : "text-amber-600"
                      )}>
                        {ben.status}
                      </span>
                    </div>
                  </td>
                  <td className="text-right">
                    <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { 
  Heart, 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Users, 
  ArrowRight,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../lib/utils';

const benefits = [
  { id: '1', title: 'Healthcare Support', category: 'Health', budget: '$1.2M', enrollment: 4500, status: 'Active' },
  { id: '2', title: 'Education Grant', category: 'Education', budget: '$800K', enrollment: 1200, status: 'Active' },
  { id: '3', title: 'Housing Assistance', category: 'Housing', budget: '$2.5M', enrollment: 850, status: 'Active' },
  { id: '4', title: 'Food Security', category: 'Social', budget: '$500K', enrollment: 3200, status: 'Pending' },
  { id: '5', title: 'Digital Literacy', category: 'Education', budget: '$200K', enrollment: 600, status: 'Active' },
];

export default function SocialBenefits() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold">Social Benefits</h2>
          <p className="text-on-surface-variant mt-1">Manage and monitor active social programs and grants.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus size={18} />
          Create Program
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="bg-surface-container-lowest p-8 rounded-3xl border border-surface-container-low shadow-sm hover:shadow-md transition-all group cursor-pointer">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-primary/5 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                <Heart size={24} />
              </div>
              <span className={cn(
                "text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider",
                benefit.status === 'Active' ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"
              )}>
                {benefit.status}
              </span>
            </div>
            
            <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{benefit.title}</h3>
            <p className="text-sm text-on-surface-variant font-medium mt-1">{benefit.category}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Budget</p>
                <p className="text-lg font-display font-bold">{benefit.budget}</p>
              </div>
              <div className="p-4 bg-surface-container-low rounded-2xl">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Enrolled</p>
                <p className="text-lg font-display font-bold">{benefit.enrollment}</p>
              </div>
            </div>

            <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary hover:bg-primary/5 rounded-xl transition-colors">
              Manage Program
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

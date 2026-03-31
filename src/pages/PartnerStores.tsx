import React from 'react';
import { 
  Store, 
  Plus, 
  Search, 
  Star, 
  MapPin, 
  ExternalLink,
  Tag,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../lib/utils';

const stores = [
  { id: '1', name: 'Fresh Market', category: 'Grocery', rating: 4.8, location: 'Downtown', status: 'Active' },
  { id: '2', name: 'Tech Haven', category: 'Electronics', rating: 4.5, location: 'Westside', status: 'Active' },
  { id: '3', name: 'Style Co.', category: 'Fashion', rating: 4.2, location: 'East Mall', status: 'Active' },
  { id: '4', name: 'Green Pharmacy', category: 'Health', rating: 4.9, location: 'North Park', status: 'Active' },
  { id: '5', name: 'Book Nook', category: 'Books', rating: 4.7, location: 'University Ave', status: 'Pending' },
];

export default function PartnerStores() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold">Partner Stores</h2>
          <p className="text-on-surface-variant mt-1">Directory of merchants and stores participating in the network.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Plus size={18} />
          Add Store
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div key={store.id} className="bg-surface-container-lowest p-8 rounded-3xl border border-surface-container-low shadow-sm hover:shadow-md transition-all group cursor-pointer">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Store size={28} />
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-50 text-amber-600 rounded-xl">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-bold">{store.rating}</span>
              </div>
            </div>

            <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{store.name}</h3>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Tag size={16} />
                <span className="text-sm font-medium">{store.category}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <MapPin size={16} />
                <span className="text-sm font-medium">{store.location}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-container-low flex items-center justify-between">
              <span className={cn(
                "text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider",
                store.status === 'Active' ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"
              )}>
                {store.status}
              </span>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

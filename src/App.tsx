/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Lazy load pages for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserDirectory = lazy(() => import('./pages/UserDirectory'));
const SocialBenefits = lazy(() => import('./pages/SocialBenefits'));
const Beneficiaries = lazy(() => import('./pages/Beneficiaries'));
const PartnerStores = lazy(() => import('./pages/PartnerStores'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex h-screen w-full items-center justify-center bg-surface">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="text-sm font-display font-bold text-on-surface-variant animate-pulse">Initializing Workspace...</p>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UserDirectory />} />
            <Route path="benefits" element={<SocialBenefits />} />
            <Route path="beneficiaries" element={<Beneficiaries />} />
            <Route path="stores" element={<PartnerStores />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <h2 className="text-6xl font-display font-bold text-primary/20">404</h2>
                <h3 className="text-2xl font-display font-bold mt-4">Page Not Found</h3>
                <p className="text-on-surface-variant mt-2 max-w-md">The section you're looking for doesn't exist or has been moved to another workspace.</p>
                <button 
                  onClick={() => window.history.back()}
                  className="mt-8 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Go Back
                </button>
              </div>
            } />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


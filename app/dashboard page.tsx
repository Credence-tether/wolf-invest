'use client';

import { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import { getCurrentUserProfile, isCurrentUserAdmin } from '@/lib/supabase';

const Page = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const profile = await getCurrentUserProfile();
      const isAdmin = await isCurrentUserAdmin();

      // Optional mock investment data for now
      const mockInvestments = [
        { planName: 'Growth Plan', amount: 5000, status: 'active' },
      ];

      setUserData({
        ...profile,
        investments: mockInvestments,
        isAdmin,
      });

      setLoading(false);
    };

    fetch();
  }, []);

  if (loading) return <p className="p-8">Loading dashboard...</p>;
  return <Dashboard userData={userData} />;
};

export default Page;

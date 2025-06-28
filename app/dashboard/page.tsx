'use client';

import { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import { getCurrentUserProfile, isCurrentUserAdmin, supabase } from '@/lib/supabase';

const Page = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const profile = await getCurrentUserProfile();
      const isAdmin = await isCurrentUserAdmin();

      const { data: userInvestments, error } = await supabase
        .from('user_investments')
        .select('*, investment_plans(*)') // join with plan details
        .eq('user_id', profile?.id);

      if (error) {
        console.error('Error fetching investments:', error);
      }

      setUserData({
        ...profile,
        investments: userInvestments || [],
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

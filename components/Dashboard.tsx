import RecentActivity from './RecentActivity';
import React from 'react';

interface Investment {
  planName: string;
  amount: number;
  status: string;
}

interface UserData {
  fullName: string;
  avatarUrl?: string;
  walletBalance?: number;
  investments?: Investment[];
  isAdmin?: boolean;
  activities?: any[]; // Replace 'any' with the correct type if known (e.g., Activity[])
}

const Dashboard: React.FC<{ userData: UserData }> = ({ userData }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Welcome, {userData?.fullName || 'User'}</h1>
        {userData?.avatarUrl && (
          <img src={userData.avatarUrl} className="w-10 h-10 rounded-full" alt="User Avatar" />
        )}
      </header>

      {/* Wallet Summary */}
      <section className="mt-6 px-6">
        <div className="bg-white p-4 rounded-md shadow flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-lg font-medium">Wallet Balance</h2>
            <p className="text-3xl mt-2">₦{userData.walletBalance?.toFixed(2) || '0.00'}</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Deposit</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">Withdraw</button>
          </div>
        </div>
      </section>

{/* Investment Section */}
<RecentActivity activities={userData.activities || []} />
<section className="mt-8 px-6">
  <h2 className="text-xl font-semibold mb-4">Your Investments</h2>
  {userData.investments && userData.investments.length > 0 ? (
    userData.investments.map((inv, idx) => (
      <div key={idx} className="bg-white p-4 rounded shadow mb-4">
        <h3 className="font-semibold">
          {inv.planName || 'Unnamed Plan'}
        </h3>
        <p>Amount: ${inv.amount}</p>
        <p>Status: {inv.status}</p>
      </div>
    ))
  ) : (
    <p className="text-gray-500">You have no active investments.</p>
  )}
</section>

      {/* Actions & Settings */}
      <section className="mt-8 px-6">
        <div className="bg-white p-4 rounded-md shadow grid md:grid-cols-2 gap-4">
          <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
            Manage Wallet
          </button>
          <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
            Payment Methods
          </button>
          <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
            Settings
          </button>
          {userData?.isAdmin && (
            <button className="w-full text-left px-4 py-2 bg-red-100 hover:bg-red-200 rounded">
              Admin Panel
            </button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 px-6 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Berke Finance. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;

import React from 'react';

interface Activity {
  id: number;
  type: 'deposit' | 'withdrawal' | 'plan_created';
  amount: number;
  date: string;
}

const RecentActivity: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  return (
    <section className="mt-8 px-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      {activities.length ? (
        <ul className="space-y-3">
          {activities.map((act) => (
            <li key={act.id} className="bg-white rounded p-4 shadow flex justify-between items-center">
              <div>
                <p className="font-medium capitalize">{act.type.replace('_', ' ')}</p>
                <p className="text-sm text-gray-500">{new Date(act.date).toLocaleDateString()}</p>
              </div>
              <p className="text-right">${act.amount.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No recent activity found.</p>
      )}
    </section>
  );
};

export default RecentActivity;

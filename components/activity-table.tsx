'use client';

import { useState } from 'react';

const activities = [
  { id: 1, date: 'Jan 20, 2026', type: 'Run', distance: '10.5 km', time: '52:30', pace: '5:00/km' },
  { id: 2, date: 'Jan 19, 2026', type: 'Ride', distance: '35.2 km', time: '1:45:12', pace: '20.1 km/h' },
  { id: 3, date: 'Jan 18, 2026', type: 'Swim', distance: '1.5 km', time: '28:45', pace: '1:55/100m' },
  { id: 4, date: 'Jan 17, 2026', type: 'Run', distance: '8.3 km', time: '41:15', pace: '4:58/km' },
  { id: 5, date: 'Jan 16, 2026', type: 'Ride', distance: '42.0 km', time: '2:10:30', pace: '19.3 km/h' },
  { id: 6, date: 'Jan 15, 2026', type: 'Run', distance: '12.0 km', time: '59:45', pace: '4:58/km' },
  { id: 7, date: 'Jan 14, 2026', type: 'Swim', distance: '2.0 km', time: '38:20', pace: '1:54/100m' },
  { id: 8, date: 'Jan 13, 2026', type: 'Run', distance: '9.5 km', time: '47:30', pace: '5:00/km' },
];

export function ActivityTable() {
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Run':
        return (
          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8" />
          </svg>
        );
      case 'Ride':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H6m6 5c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4" />
          </svg>
        );
      case 'Swim':
        return (
          <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      Run: 'bg-primary/10 text-primary',
      Ride: 'bg-blue-500/10 text-blue-600',
      Swim: 'bg-cyan-500/10 text-cyan-600',
    };
    return colors[type as keyof typeof colors] || 'bg-muted text-foreground';
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Recent Activities</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-semibold text-foreground/70">
                <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="hover:text-foreground flex items-center gap-2">
                  Date
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
                  </svg>
                </button>
              </th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-foreground/70">Type</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-foreground/70">Distance</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-foreground/70">Time</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-foreground/70">Pace/Speed</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-foreground/70">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id} className={`border-b border-border hover:bg-muted/30 transition-colors ${idx % 2 === 0 ? 'bg-background' : ''}`}>
                <td className="px-6 py-4 text-sm text-foreground">{activity.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(activity.type)}
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeBadge(activity.type)}`}>{activity.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-foreground">{activity.distance}</td>
                <td className="px-6 py-4 text-sm text-foreground/70">{activity.time}</td>
                <td className="px-6 py-4 text-sm text-foreground/70">{activity.pace}</td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-primary/80 font-medium text-sm">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-border bg-muted/30 flex items-center justify-between">
        <p className="text-sm text-foreground/60">Showing {activities.length} of 156 activities</p>
        <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Load More →
        </button>
      </div>
    </div>
  );
}

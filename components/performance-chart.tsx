'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', runs: 8, rides: 6, swims: 2 },
  { month: 'Feb', runs: 10, rides: 7, swims: 3 },
  { month: 'Mar', runs: 9, rides: 8, swims: 4 },
  { month: 'Apr', runs: 12, rides: 9, swims: 3 },
  { month: 'May', runs: 11, rides: 10, swims: 5 },
  { month: 'Jun', runs: 13, rides: 8, swims: 4 },
  { month: 'Jul', runs: 12, rides: 11, swims: 6 },
  { month: 'Aug', runs: 14, rides: 9, swims: 4 },
  { month: 'Sep', runs: 11, rides: 10, swims: 5 },
  { month: 'Oct', runs: 13, rides: 12, swims: 3 },
  { month: 'Nov', runs: 12, rides: 11, swims: 4 },
  { month: 'Dec', runs: 11, rides: 10, swims: 5 },
];

export function PerformanceChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">Performance Trends</h2>
        <p className="text-sm text-foreground/60">Activity count by month over the year</p>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              dataKey="month"
              stroke="var(--color-foreground)"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="var(--color-foreground)"
              style={{ fontSize: '12px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
              }}
              labelStyle={{ color: 'var(--color-foreground)' }}
              cursor={{ stroke: 'var(--color-primary)' }}
            />
            <Line
              type="monotone"
              dataKey="runs"
              stroke="var(--color-primary)"
              strokeWidth={2}
              dot={{ fill: 'var(--color-primary)', r: 4 }}
              activeDot={{ r: 6 }}
              name="Runs"
            />
            <Line
              type="monotone"
              dataKey="rides"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 4 }}
              activeDot={{ r: 6 }}
              name="Rides"
            />
            <Line
              type="monotone"
              dataKey="swims"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ fill: '#06b6d4', r: 4 }}
              activeDot={{ r: 6 }}
              name="Swims"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
          <span className="text-foreground/60">Runs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3b82f6' }} />
          <span className="text-foreground/60">Rides</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#06b6d4' }} />
          <span className="text-foreground/60">Swims</span>
        </div>
      </div>
    </div>
  );
}

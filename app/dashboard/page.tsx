'use client';

import { useState } from 'react';
import { MetricsGrid } from '@/components/metrics-grid';
import { ActivityTable } from '@/components/activity-table';
import { PerformanceChart } from '@/components/performance-chart';
import { Filters } from '@/components/filters';

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('this-year');
  const [selectedAthlete, setSelectedAthlete] = useState('self');

  return (
    <div className="space-y-6 p-6">
      {/* Filters */}
      <Filters timeRange={timeRange} setTimeRange={setTimeRange} selectedAthlete={selectedAthlete} setSelectedAthlete={setSelectedAthlete} />

      {/* Metrics Grid */}
      <MetricsGrid />

      {/* Performance Chart */}
      <PerformanceChart />

      {/* Activity Table */}
      <ActivityTable />
    </div>
  );
}

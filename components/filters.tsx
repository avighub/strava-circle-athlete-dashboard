'use client';

import { Button } from '@/components/ui/button';

interface FiltersProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
  selectedAthlete: string;
  setSelectedAthlete: (athlete: string) => void;
}

export function Filters({ timeRange, setTimeRange, selectedAthlete, setSelectedAthlete }: FiltersProps) {
  const athletes = [
    { id: 'self', name: 'You' },
    { id: 'jane-doe', name: 'Jane Doe' },
    { id: 'john-smith', name: 'John Smith' },
    { id: 'mike-wilson', name: 'Mike Wilson' },
  ];

  const timeRanges = [
    { id: 'this-year', label: 'This Year' },
    { id: 'last-year', label: 'Last Year' },
    { id: 'all-time', label: 'All Time' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-card rounded-lg p-4 border border-border">
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {/* Time Range Filter */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Time Period</label>
          <div className="flex gap-2">
            {timeRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => setTimeRange(range.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === range.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Athlete Selector */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Compare Athlete</label>
          <select
            value={selectedAthlete}
            onChange={(e) => setSelectedAthlete(e.target.value)}
            className="px-3 py-2 rounded-lg text-sm font-medium bg-muted text-foreground border border-border hover:border-primary transition-colors cursor-pointer"
          >
            {athletes.map((athlete) => (
              <option key={athlete.id} value={athlete.id}>
                {athlete.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </button>
      </div>
    </div>
  );
}

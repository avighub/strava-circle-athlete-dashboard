export function MetricsGrid() {
  const metrics = [
    {
      label: 'Total Runs',
      value: '48',
      change: '+12%',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8" />
        </svg>
      ),
      color: 'from-primary to-primary/60',
    },
    {
      label: 'Total Rides',
      value: '32',
      change: '+8%',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H6m6 5c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-400',
    },
    {
      label: 'Total Swims',
      value: '16',
      change: '+4%',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8" />
        </svg>
      ),
      color: 'from-cyan-500 to-cyan-400',
    },
    {
      label: 'Max Distance',
      value: '42.2 km',
      change: '+2.5 km',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-400',
    },
    {
      label: 'Fastest Pace',
      value: '4:35/km',
      change: '-15 sec',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-amber-500 to-amber-400',
    },
    {
      label: 'Total Time',
      value: '148 hrs',
      change: '+24 hrs',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      ),
      color: 'from-green-500 to-green-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric, idx) => (
        <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-foreground/60 mb-2">{metric.label}</p>
              <p className="text-3xl font-bold text-foreground mb-2">{metric.value}</p>
              <p className="text-xs font-medium text-primary">{metric.change}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center text-white`}>
              {metric.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

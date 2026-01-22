'use client';

export default function ActivitiesPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">My Activities</h1>
        <p className="text-foreground/60">View and manage all your activities</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <h2 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h2>
        <p className="text-foreground/60">Detailed activity management features will be available here</p>
      </div>
    </div>
  );
}

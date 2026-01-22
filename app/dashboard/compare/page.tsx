'use client';

export default function ComparePage() {
  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Compare Athletes</h1>
        <p className="text-foreground/60">Compare your performance with other athletes</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 19H9a6 6 0 016-6h0a6 6 0 016 6v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1a6 6 0 016-6z" />
        </svg>
        <h2 className="text-xl font-semibold text-foreground mb-2">Coming Soon</h2>
        <p className="text-foreground/60">Athlete comparison features will be available here</p>
      </div>
    </div>
  );
}

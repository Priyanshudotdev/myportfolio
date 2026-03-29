import { cn } from "@/lib/utils";

export default function GlobalLoading() {
  return (
    <div className="relative min-h-screen w-full animate-pulse">
      <div className="mx-auto max-w-2xl border-l border-r border-l-muted border-r-muted bg-background px-4 py-8 sm:px-6">
        {/* Banner skeleton */}
        <div className="mb-4 h-32 w-full rounded-lg bg-muted" />

        {/* Profile section skeleton */}
        <div className="flex items-start gap-4 py-4">
          <div className="h-28 w-28 shrink-0 rounded-full bg-muted" />
          <div className="flex-1 space-y-2 pt-2">
            <div className="h-8 w-3/4 rounded bg-muted" />
            <div className="h-4 w-1/2 rounded bg-muted" />
          </div>
        </div>

        {/* Social buttons skeleton */}
        <div className="flex gap-2 py-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-muted" />
          ))}
        </div>

        {/* Description skeleton */}
        <div className="space-y-2 py-4">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="h-4 w-4/5 rounded bg-muted" />
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-muted" />

        {/* Experience section skeleton */}
        <div className="space-y-4 py-4">
          <div className="h-6 w-1/3 rounded bg-muted" />
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded bg-muted" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-1/3 rounded bg-muted" />
                  <div className="h-3 w-1/4 rounded bg-muted" />
                  <div className="h-3 w-full rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-muted" />

        {/* Projects section skeleton */}
        <div className="space-y-4 py-4">
          <div className="h-6 w-1/3 rounded bg-muted" />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-40 rounded-lg bg-muted" />
            ))}
          </div>
        </div>

        {/* Footer skeleton */}
        <div className="mt-8 flex items-center justify-between py-4">
          <div className="h-4 w-32 rounded bg-muted" />
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

export default function PageLoading() {
  return (
    <div className="relative flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-foreground" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

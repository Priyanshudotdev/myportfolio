import { cn } from "@/lib/utils";

const Divider = ({ className }: { className?: string }) => {
  return (
    <hr
      className={cn(
        "border-0 border-t border-dashed border-foreground-muted my-4 dark:border-foreground-muted",
        className,
      )}
    />
  );
};

export default Divider;

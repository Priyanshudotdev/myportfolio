"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/visitor");
        const data = await res.json();
        if (data && typeof data.count === "number") {
          setCount(data.count);
        } else {
          setCount(0); // If fails, show 0 instead of fake number
        }
      } catch (err) {
        setCount(0); // If fails, show 0 instead of fake number
      }
    };
    fetchCount();
  }, []);

  if (count === null) {
    return (
      <p className="text-sm text-muted-foreground opacity-50">
        Counting visitors...
      </p>
    );
  }

  return (
    <p className="text-sm text-muted-foreground">
      You're the{" "}
      <span className="text-foreground font-medium">
        {count.toLocaleString()}
      </span>
      <sup className="text-xs">th</sup> visitor
    </p>
  );
}

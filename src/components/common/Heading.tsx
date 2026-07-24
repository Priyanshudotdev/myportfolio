import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type HeadingPropsType = HTMLAttributes<HTMLHeadingElement> & {
  text?: string;
};

const Heading = ({ className, children, text, ...props }: HeadingPropsType) => {
  return (
    <h1 className={cn("font-serif text-xl text-muted-foreground hover:text-white/80 transition-colors duration-150", className)} {...props}>
      {text ?? children}
    </h1>
  );
};

export default Heading;

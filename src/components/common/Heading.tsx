import { cn } from "@/lib/utils";

type HeadingPropsType = {
  className?: string;
  text: string;
};

const Heading = ({ className, text }: HeadingPropsType) => {
  return (
    <h1 className={cn("font-serif text-xl text-muted-foreground", className)}>
      {text}
    </h1>
  );
};

export default Heading;

import type { ReactNode, Ref } from "react";

type ContainerPropsType = {
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
};

const Container = ({
  className,
  children,
  ref,
  ...props
}: ContainerPropsType) => {
  return (
    <div
      className={`border-l border-r border-l-muted/80 border-r-muted/80 animate-fade-in-blur w-full container mx-auto max-w-3xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

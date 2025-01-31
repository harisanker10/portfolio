import react from "react";
export function Section({
  children,
  className,
}: {
  children: react.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`text-[15px] md:text-[15px] mx-6 text-foreground max-w-[66rem] md:mx-auto my-6 ${className}`}
    >
      {children}
    </section>
  );
}

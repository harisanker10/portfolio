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
      className={`text-[15px] md:text-[15px] w-full text-foreground max-w-[66rem] md:mx-auto my-6 px-6 ${className}`}
    >
      {children}
    </section>
  );
}

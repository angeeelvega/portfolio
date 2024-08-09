import React from "react";

export default function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`p-8 ${className}`}>
      <h2 className="mb-4 text-3xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
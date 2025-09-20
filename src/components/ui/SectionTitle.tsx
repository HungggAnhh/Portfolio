import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  className = "",
  ...rest
}: Props) {
  return (
    <div className={`mb-8 ${className}`} {...rest}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

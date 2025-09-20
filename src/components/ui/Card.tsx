import React, { forwardRef } from "react";

// Dùng kiểu sẵn có của div để tự nhận 'style', 'onClick', ...
type DivProps = React.HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, DivProps>(function Card(
  { className = "", children, ...rest },
  ref
) {
  return (
    <div ref={ref} className={`card ${className}`} {...rest}>
      {children}
    </div>
  );
});

export default Card;

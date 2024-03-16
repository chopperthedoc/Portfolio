// components/ui/card/CardContent.tsx
import React, { ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export default CardContent;

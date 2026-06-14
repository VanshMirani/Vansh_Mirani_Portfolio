import type { PropsWithChildren } from 'react';

type GlassCardProps = PropsWithChildren<{
  className?: string;
}>;

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return <div className={`glass-panel rounded-2xl ${className}`}>{children}</div>;
}

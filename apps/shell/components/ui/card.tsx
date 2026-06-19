import { ReactNode } from 'react'

export function Card({ className = '', children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950 ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ className = '', children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={`px-6 py-4 border-b border-slate-200 dark:border-slate-800 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ className = '', children }: { className?: string; children?: ReactNode }) {
  return (
    <h3 className={`text-lg font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  )
}

export function CardDescription({ className = '', children }: { className?: string; children?: ReactNode }) {
  return (
    <p className={`text-sm text-slate-600 dark:text-slate-400 mt-1 ${className}`}>
      {children}
    </p>
  )
}

export function CardContent({ className = '', children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  )
}

import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'secondary'
  size?: 'sm' | 'lg'
}

export function Button({ 
  className = '', 
  variant = 'default',
  size = 'lg',
  children,
  ...props 
}: ButtonProps & { children?: ReactNode }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    default: 'bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-950 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200',
    ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-8 py-3 text-lg'
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

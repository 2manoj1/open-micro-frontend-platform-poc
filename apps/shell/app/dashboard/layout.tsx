'use client';

import { Boxes, Home, LogOut, Network } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { publicPlatformConfig } from '@/lib/public-platform-config';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold text-slate-950 dark:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              <Network className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>{publicPlatformConfig.shellName}</span>
          </Link>

          <nav className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 rounded-md">
                <Home className="h-4 w-4" aria-hidden="true" />
                Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                className="gap-2 rounded-md"
                variant={pathname === '/dashboard' ? 'default' : 'ghost'}
                size="sm"
              >
                <Boxes className="h-4 w-4" aria-hidden="true" />
                Dashboard
              </Button>
            </Link>

            <Button
              className="gap-2 rounded-md"
              variant="ghost"
              size="sm"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.removeItem('auth');
                  window.location.href = '/';
                }
              }}
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Reset
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto min-h-[calc(100vh-8rem)] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white py-5 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{publicPlatformConfig.shellName} MVP · SDK-first micro frontend architecture</p>
          <p>RSC · CSR · SSG · ISR · AI app ready</p>
        </div>
      </footer>
    </div>
  );
}

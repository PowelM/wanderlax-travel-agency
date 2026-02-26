import Link from 'next/link';

interface AdminHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function AdminHeader({ title, description, children }: AdminHeaderProps) {
  return (
    <header className="h-20 shrink-0 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-40 px-8 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="size-2 rounded-full bg-primary animate-pulse"></div>
          <h1 className="text-xl font-bold text-white tracking-tight">{title}</h1>
        </div>
        {description && (
          <p className="text-slate-500 text-xs font-medium tracking-wide uppercase opacity-70">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-5">
        <Link 
          href="/portal/dashboard"
          className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs font-bold uppercase tracking-wider"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:rotate-12 transition-transform">auto_awesome_motion</span>
          Switch to Portal
        </Link>
        <div className="h-8 w-px bg-white/10 hidden sm:block" />
        <div className="flex items-center gap-3">
          {children}
        </div>
      </div>
    </header>
  );
}

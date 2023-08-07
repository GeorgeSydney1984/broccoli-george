import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-white fixed top-0 w-full border-b-2 border-slate-50 h-[var(--header-height)]">
      <nav className="mx-auto flex items-center justify-between p-4 lg:px-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center gap-2">
            <Image width={30} height={30} src="/logo.png" alt="logo"/>
            <span className="text-slate-800">Brocconi</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
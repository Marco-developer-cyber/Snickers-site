import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-zinc-900/60 backdrop-blur-xl font-headline tracking-tighter uppercase font-bold fixed w-full top-0 z-50 flex justify-between items-center px-12 py-8 shadow-[0_40px_40px_-10px_rgba(0,0,0,0.4)]">
        <Link to="/" className="text-4xl font-black tracking-tighter text-white hover:scale-105 transition-transform" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
          SOLE
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-primary-container border-b-2 border-primary-container pb-1 hover:scale-105 transition-transform" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
            NEW DROP
          </Link>
          <Link to="#" className="text-zinc-500 hover:text-white transition-colors hover:scale-105" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
            BRANDS
          </Link>
          <Link to="#" className="text-zinc-500 hover:text-white transition-colors hover:scale-105" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
            SALE
          </Link>
          <Link to="#" className="text-zinc-500 hover:text-white transition-colors hover:scale-105" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
            LOOKBOOK
          </Link>
        </nav>
        <div className="flex gap-6 text-[#FF3B00] items-center">
          <Link to="/animate" title="AI Studio: Animate" className="hover:scale-105 transition-transform flex items-center gap-2 bg-primary-container text-white px-4 py-2 rounded-none font-label text-sm uppercase" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
            <span className="material-symbols-outlined">movie</span>
            <span className="hidden lg:inline">Animate</span>
          </Link>
          <button className="text-white hover:text-[#FF3B00] hover:scale-105 transition-transform" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="text-white hover:text-[#FF3B00] hover:scale-105 transition-transform" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button className="text-white hover:text-[#FF3B00] hover:scale-105 transition-transform" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </header>

      <main className="flex-grow pt-32 w-full flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-[#0E0E0E] text-[#FF3B00] font-mono uppercase tracking-widest text-xs relative overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-24 w-full mt-auto">
        <div className="text-[15vw] font-black text-white opacity-5 pointer-events-none absolute bottom-0 left-0 leading-none z-0 font-headline">
          SOLE
        </div>
        <div className="z-10 md:col-span-1">
          <p className="text-zinc-600 mb-4">© 2026 SOLE URBAN MONOLITH. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="z-10 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-zinc-600 hover:text-[#FF3B00] transition-all duration-500">SHOP</Link>
            <Link to="#" className="text-zinc-600 hover:text-[#FF3B00] transition-all duration-500">STORY</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="#" className="text-zinc-600 hover:text-[#FF3B00] transition-all duration-500">PRIVACY</Link>
            <Link to="#" className="text-zinc-600 hover:text-[#FF3B00] transition-all duration-500">TERMS</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="#" className="text-zinc-600 hover:text-[#FF3B00] transition-all duration-500">CONTACT</Link>
            <Link to="#" className="text-zinc-600 hover:text-[#FF3B00] transition-all duration-500">INSTAGRAM</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

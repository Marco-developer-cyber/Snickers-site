import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] bg-surface-container-lowest flex flex-col justify-center items-center overflow-hidden px-6 lg:px-12 py-24 -mt-32">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa-nc6Fm86kTkNXqz_DEyx0BWVkCJWyoMhWWE7MNbBa9Y2G50MJ6PzmbaUfdGEoI5xxgabVyOqyYgS1T2o0nsaVYVTqO53xAlvkF81rLmcRYBlLm5IRuuJ46mX0cS0Ts2YSj9ckbZgnKQ3xRmzvbzgW_Fw2GqQ2hIapt_aUM-az78_gFp54P-nZVL6Z1vkvb54QK0gHXoT8-9R7taNjQnFOLvVz8W1bdLA6eNb-qGbrZGCkQ4-eKqx57kdoY-ufcPu0WxdwM75X9k')" }}
        ></div>
        <div className="relative z-10 text-center flex flex-col items-center gap-8 max-w-5xl mx-auto w-full mt-32">
          <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-[120px] leading-none tracking-tighter text-white uppercase break-words w-full">
            НОВАЯ ВОЛНА.
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto tracking-wide uppercase">
            Коллекция Весна–Лето 2025
          </p>
          <a className="mt-8 bg-primary-container text-on-primary-container font-label uppercase font-bold py-5 px-10 text-lg tracking-wider btn-hover-glow inline-flex items-center gap-3" href="#new-arrivals">
            [ СМОТРЕТЬ ДРОПЫ ]
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        
        {/* Marquee */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-surface-container py-4 border-t border-surface-container-highest/20">
          <div className="flex whitespace-nowrap animate-marquee items-center">
            <div className="flex gap-16 px-8 items-center font-headline font-bold text-2xl text-surface-variant tracking-tighter uppercase opacity-50">
              <span>NIKE</span><span>•</span>
              <span>ADIDAS</span><span>•</span>
              <span>NEW BALANCE</span><span>•</span>
              <span>ASICS</span><span>•</span>
              <span>SALOMON</span><span>•</span>
              <span>NIKE</span><span>•</span>
              <span>ADIDAS</span><span>•</span>
              <span>NEW BALANCE</span><span>•</span>
              <span>ASICS</span><span>•</span>
              <span>SALOMON</span><span>•</span>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section id="new-arrivals" className="py-32 px-6 lg:px-12 bg-surface max-w-screen-2xl mx-auto w-full">
        <div className="flex justify-between items-end mb-16 border-b-2 border-surface-container-high pb-6">
          <h2 className="font-headline font-bold text-4xl md:text-5xl uppercase tracking-tighter">New Arrivals</h2>
          <a className="font-mono text-sm uppercase text-zinc-500 hover:text-primary-container border-b-2 border-transparent hover:border-primary-container pb-1 transition-all" href="#">View All</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/product/1" className="group relative bg-surface-container-low card-hover cursor-pointer p-6 min-h-[500px] flex flex-col justify-between transition-colors duration-500 block">
            <div className="absolute top-6 left-6 flex gap-2 z-10">
              <span className="bg-primary-container text-on-primary-container font-label text-xs font-bold px-3 py-1 uppercase tracking-widest">NEW</span>
            </div>
            <div className="relative h-64 w-full flex items-center justify-center overflow-hidden mix-blend-screen">
              <img alt="Y-3 RUNNER 4D" className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTbjmcdq5i6bEqZRqknKm1VW61-xOqPtJeySGmuZML5zg8xxbYmVaRD5n3h72VWDBo1fTkVBhZW_glkqWk0a0MWfSkeUHmQNLQLqY5kfFvME8Jj67PYtxOrloOQyfD-Af59LQgNpsWrh5W_OgPcjCtBLl61vnBT4AmVml-J1HlCVp_9ExyKwswG8XrqyWlqJGasZMVPKiyIP_CWoL9XXayCO67fNQ8CYSBu6gusc1V-t91P1qe0Q_PxIO05yk3xStNT3V4FomCFkg" />
            </div>
            <div className="mt-8 flex flex-col gap-2 relative z-10">
              <h3 className="font-headline font-bold text-2xl uppercase tracking-tighter group-hover:text-primary-container transition-colors">Y-3 RUNNER 4D</h3>
              <p className="font-body text-on-surface-variant text-sm">Core Black / Core Black</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-mono text-primary font-bold text-lg">₽ 34,900</span>
                <span className="text-white group-hover:text-primary-container transition-colors material-symbols-outlined">add</span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/product/2" className="group relative bg-surface-container-low card-hover cursor-pointer p-6 min-h-[500px] flex flex-col justify-between transition-colors duration-500 block">
            <div className="absolute top-6 left-6 flex gap-2 z-10">
              <span className="bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-md">LIMITED</span>
            </div>
            <div className="relative h-64 w-full flex items-center justify-center overflow-hidden mix-blend-screen">
              <img alt="ACW* VORTEX" className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxPVZlPbUodxJZpyQhcjuIhqg_9eYwZrn9zj8aLSb-x5LcBsYDn1QDigTXOsJ1fhAipeRBYnHVBSrfm66BqHgWmXIAb5xuTPBz_l3D3nTSkSjWIvcKBRP06YgKXW8PuBt0ZcRFKJOmvQ5OMdY9i6p0q8c91016DRzxz_3rpFM15kMIBaLIl9cH4ujWVgwH-aUU3r7Df1IIAfyuIPzKe9JtGHzDASD30qICJFjV_vwq2ApJ3mkw24LL5YJaktYh2CQDQjypKfyYThE" />
            </div>
            <div className="mt-8 flex flex-col gap-2 relative z-10">
              <h3 className="font-headline font-bold text-2xl uppercase tracking-tighter group-hover:text-primary-container transition-colors">ACW* VORTEX</h3>
              <p className="font-body text-on-surface-variant text-sm">Bone / Ash</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-mono text-primary font-bold text-lg">₽ 42,500</span>
                <span className="text-white group-hover:text-primary-container transition-colors material-symbols-outlined">add</span>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/product/3" className="group relative bg-surface-container-low card-hover cursor-pointer p-6 min-h-[500px] flex flex-col justify-between transition-colors duration-500 block">
            <div className="relative h-64 w-full flex items-center justify-center overflow-hidden mix-blend-screen">
              <img alt="SALOMON XT-6" className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfWORMq9lAljSvUT3DalaJzQWT7JoRpCM6A0AbWA-w4L_soxznr5s69f69S9i163BQYaqK9NS2tfRsyVSw02cl-_qoOV0Irh7WuqJIw2oA78IgQARWAMTC90MFMP8jU3Prnp6Ih5AWge_KX0e-vhksiaRGBaTNeAJP9LRGFHuS3fowQ-kdzmgkE-2WsFJpzBHCVF9-Xd3yrorFJ7RdWLzOsIe8aG_6WD3KbvQJEyfFE7VXPDuX6Ug96Hnugh0X0kTaaYlQe8FpYjA" />
            </div>
            <div className="mt-8 flex flex-col gap-2 relative z-10">
              <h3 className="font-headline font-bold text-2xl uppercase tracking-tighter group-hover:text-primary-container transition-colors">SALOMON XT-6</h3>
              <p className="font-body text-on-surface-variant text-sm">Phantom / Black</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-mono text-primary font-bold text-lg">₽ 18,200</span>
                <span className="text-white group-hover:text-primary-container transition-colors material-symbols-outlined">add</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Brands Ribbon */}
      <section className="py-24 bg-[#111111] overflow-hidden relative">
        <h2 className="sr-only">Brands We Carry</h2>
        <div className="flex whitespace-nowrap animate-marquee items-center h-24">
          <div className="flex gap-24 px-12 items-center font-headline font-black text-6xl md:text-8xl text-white opacity-[0.03] tracking-tighter uppercase">
            <span>NIKE</span>
            <span>ADIDAS</span>
            <span>SALOMON</span>
            <span>ASICS</span>
            <span>NEW BALANCE</span>
            <span>RICK OWENS</span>
            <span>NIKE</span>
            <span>ADIDAS</span>
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section className="relative min-h-[819px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQJ9XuUDJFhkflbV0cfj0GrSIvynzhlL3jAc8LJNbMLbtMhB6oH_4wHBJuAau5R-D2yjEpfw-v4vbWD5tvVcHIMSEXqempCZNXiOofZtw4OYFIh-TLByi_QFVBTb33UJjd7NMyZgt0kUFXMw5Umh1n4wYx6mdWt2OcJhF1l0PCKIRgcDDdps8YKbKZUjQfbBc_xl4201sFWeizb2UEAx8l4siLf-TcRDMB8aU5DF48gqgMKLRxMndc7sM0D9HmOVp5qXayunTTwGM')" }}></div>
        <div className="absolute inset-0 bg-surface-container-lowest/70 mix-blend-multiply"></div>
        <div className="relative z-10 text-center flex flex-col items-center gap-12 max-w-4xl mx-auto px-6">
          <h2 className="font-headline font-black text-5xl md:text-7xl leading-none tracking-tighter text-white uppercase mix-blend-difference">
            НЕ ПРОСТО ОБУВЬ.<br/>ЭТО ЯЗЫК.
          </h2>
          <Link to="#" className="mt-4 border-2 border-white text-white font-label uppercase font-bold py-4 px-8 text-lg tracking-wider hover:bg-white hover:text-surface-container-lowest transition-all duration-300 backdrop-blur-sm bg-white/5">
            VIEW LOOKBOOK
          </Link>
        </div>
      </section>
    </>
  );
}

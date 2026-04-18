export default function Product() {
  return (
    <div className="flex-grow pb-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1920px] mx-auto w-full">
      {/* Left: Image Gallery */}
      <section className="lg:col-span-7 flex flex-col gap-4">
        <div className="w-full aspect-[4/3] bg-surface-container-lowest overflow-hidden flex items-center justify-center relative group">
          <img alt="Main Sneaker Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrOduIV79gBBDmBAhLaqV6wHB2jdDbY0C1ZACCY0xxemvgrfZu5YM11SU26A-okcxuUw4vwXXFqFl20rCbhagsWpAk8PVIxTJUhBNER8iF80I0tOjfnUigS2quw81Dl2hSyxcvGign0wFYOy4IPq9EnnD5UvTQs0thao6-pHFLK4Ii4xuLCEhlSp9bk3Vb6P_zSAte53ND12qRJDKNyZOl_ytIUVDRKZHJCBuvo-TuqdcbMi_DO-VSyJER6EVaGAt08JKR3lNz3VU" />
          <div className="absolute top-6 left-6 bg-tertiary-container text-on-tertiary-container font-label uppercase text-xs tracking-widest px-3 py-1 font-bold">
            Archive Series
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button className="aspect-square bg-surface-container-low overflow-hidden hover:ring-2 ring-primary-container transition-all">
            <img alt="Sneaker Detail 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiiin03U5mSVKFDZv5dJiIhW_t6BDmB-jetLeWw_bHqC2ppF-Xua1gkxdZsJAyjiBA1SKKJ8GdxCsdgIRbt1q352vdHV2aJn1OKo-3iN6oVWvXYan7gMLLh1Cqc71Ay2NoYZXFJfjoRRTTUDVsajMAnDVZUxes97xLJzauDtv6dz3pm-bMt1p3lIoLWURPZ2ny2jGK0cusPBdT_PHMXnTbplcYSnwvtZJQEeSiGlD8npebSgYdVF54w5pf7aPm14BhtJIecvFWIQ8" />
          </button>
          <button className="aspect-square bg-surface-container-low overflow-hidden hover:ring-2 ring-primary-container transition-all opacity-60 hover:opacity-100">
            <img alt="Sneaker Detail 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvi_s0bA1LMF4Nkv1NxlHtYwxuwTB6U28jSpHNfg9BVRhNXiswEMynHw57B_Tt8kKPu_xwTk--w4NRYAWIGlyc6x8GFZvgbqQokJMxnXpmFpETCX_Y902Pq1mrGzx1Vjid6w0PrGpRfFdega6C3dS4jRzE5pWWtVyz-Lp1AC7sVRnqyzErAYHvstCxC9I2HzKs-JZCtQVqmuyErHe-xk-Yi4N1vKyDKrbVUZRx7GGbO9NAFzTt2NE4KhbUIS9QgYN71KGaIySrbTg" />
          </button>
          <button className="aspect-square bg-surface-container-low overflow-hidden hover:ring-2 ring-primary-container transition-all opacity-60 hover:opacity-100">
            <img alt="Sneaker Detail 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlmdFed05c5AM320xyhHgtaw6G6xs5olOmjaUbOd_s21ozeAzPHrbfqDCZeqDp3QBA_Ljh5s0lNkfI5rwcSSAXhjcf_ygPNnpNrxKvgeB2_DrJmANA1nctLHjIozqcbeHpQvFYXAmPD-ljbWH2Xs0jGDhrGBYnHqsN43IJ6jDtW2R1Ll4oEzxAAIH_BUAf3mmJkymQj9_kMjvNKJ1Twf7rT5N3Bcohj4ZJtTEdvtEKhg4i5zjJ7j9-zQWLGQBCCpcqDH3YrXIGucg" />
          </button>
          <button className="aspect-square bg-surface-container-low overflow-hidden hover:ring-2 ring-primary-container transition-all opacity-60 hover:opacity-100">
            <img alt="Sneaker Detail 4" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKYM4yMLUqEqKFF8nk1_C3ux8pX4NRjgL84FDDuOW357EjFsi5si9qtuHEVsiPn4wzk8NDm5tZnNMnOs9CxOWRN1sHYBbXWoLTF6IoPYUDUfWe9aCpZL4Ij_WCI-5MdVm9MLMeuwowUtoUYZruWFnxY9cEYoTRlNdz2sgQB3iOd9udCG-dqChQPHIG3yXKcrV9eOeJPny13Yq8iylBp0GFKRy2QLh2_k2i0IoFvDS7QekIX17LpN1N8Q5ZEA1Ik8CA8c_fr2_ICk0" />
          </button>
        </div>
      </section>

      {/* Right: Product Info */}
      <section className="lg:col-span-5 flex flex-col pt-4">
        <div className="mb-8">
          <h2 className="font-label text-on-surface-variant uppercase tracking-widest text-sm mb-2">NEO-TOKYO APPAREL</h2>
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">VOID<br/>RUNNER 01</h1>
          <p className="font-label text-primary-container text-3xl font-medium">$245.00</p>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <span className="font-label uppercase tracking-widest text-xs text-secondary">Select Size</span>
            <button className="font-label uppercase tracking-widest text-xs text-primary underline underline-offset-4 hover:text-white transition-colors">Size Guide</button>
          </div>
          <div className="grid grid-cols-5 gap-3">
            <button className="aspect-square bg-surface-container flex items-center justify-center font-label text-lg hover:ring-2 ring-primary-container hover:bg-surface-container-high transition-all text-on-surface">7</button>
            <button className="aspect-square bg-surface-container flex items-center justify-center font-label text-lg hover:ring-2 ring-primary-container hover:bg-surface-container-high transition-all text-on-surface">8</button>
            <button className="aspect-square bg-surface-container flex items-center justify-center font-label text-lg ring-2 ring-primary-container bg-surface-container-high text-white transition-all">9</button>
            <button className="aspect-square bg-surface-container flex items-center justify-center font-label text-lg hover:ring-2 ring-primary-container hover:bg-surface-container-high transition-all text-on-surface">10</button>
            <button className="aspect-square bg-surface-container flex items-center justify-center font-label text-lg hover:ring-2 ring-primary-container hover:bg-surface-container-high transition-all text-on-surface">11</button>
            <button className="aspect-square bg-surface-container flex items-center justify-center font-label text-lg hover:ring-2 ring-primary-container hover:bg-surface-container-high transition-all text-on-surface opacity-50 cursor-not-allowed line-through">12</button>
            <button className="aspect-square bg-surface-container flex items-center justify-center font-label text-lg hover:ring-2 ring-primary-container hover:bg-surface-container-high transition-all text-on-surface opacity-50 cursor-not-allowed line-through">13</button>
          </div>
        </div>

        <button className="w-full bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest py-6 text-xl hover:scale-[1.02] transition-transform duration-300 mb-12" style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}>
          ADD TO CART - $245.00
        </button>

        {/* Accordion */}
        <div className="flex flex-col border-t border-outline-variant/15">
          <details className="group cursor-pointer" open>
            <summary className="flex justify-between items-center py-6 font-headline uppercase font-bold text-lg list-none hover:text-primary transition-colors">
              Description
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="pb-6 font-body text-on-surface-variant leading-relaxed text-sm">
              Engineered for the concrete jungle. The Void Runner 01 merges brutalist aesthetics with hyper-responsive cushioning. Featuring a seamless monochrome upper and an aggressive tread pattern designed for maximum traction on unforgiving urban surfaces. It is a statement of architectural intent for your feet.
            </div>
          </details>
          <details className="group cursor-pointer border-t border-outline-variant/15">
            <summary className="flex justify-between items-center py-6 font-headline uppercase font-bold text-lg list-none hover:text-primary transition-colors">
              Materials & Tech
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="pb-6 font-body text-on-surface-variant leading-relaxed text-sm">
              <ul className="list-none space-y-2 font-label text-xs">
                <li><span className="text-on-surface">&gt;</span> UPPER: Ballistic nylon mesh with welded TPU overlays</li>
                <li><span className="text-on-surface">&gt;</span> MIDSOLE: High-density EVA core wrapped in structural cage</li>
                <li><span className="text-on-surface">&gt;</span> OUTSOLE: Carbon rubber compound</li>
              </ul>
            </div>
          </details>
          <details className="group cursor-pointer border-t border-outline-variant/15">
            <summary className="flex justify-between items-center py-6 font-headline uppercase font-bold text-lg list-none hover:text-primary transition-colors">
              Shipping & Returns
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="pb-6 font-body text-on-surface-variant leading-relaxed text-sm">
              Free standard shipping on orders over $200. Express shipping available at checkout. Returns accepted within 14 days of delivery for unworn items in original monolithic packaging.
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}

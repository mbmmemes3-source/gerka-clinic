import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { 
  Plus, 
  Check, 
  ShoppingBag, 
  Droplets, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Info,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import AddToCartSection from "@/components/shop/AddToCartSection";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // 1. Fetch product from Neon
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { category: true }
  });

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- BREADCRUMBS --- */}
        <nav className="flex items-center gap-3 mb-12 text-[10px] uppercase font-bold tracking-widest text-zinc-400">
          <Link href="/shop" className="hover:text-zinc-900 transition-colors flex items-center gap-2">
            <ArrowLeft size={14} /> Back to Shop
          </Link>
          <span className="h-[1px] w-4 bg-zinc-200" />
          <span className="text-zinc-300">{product.category.name}</span>
          <span className="h-[1px] w-4 bg-zinc-200" />
          <span className="text-zinc-900 line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT: VISUALS --- */}
          <div className="lg:col-span-6 space-y-6">
            <div className="aspect-square bg-[#FAF9F6] rounded-[3.5rem] overflow-hidden relative border border-zinc-100 shadow-inner group">
              <img 
                src={product.image} 
                className="w-full h-full object-contain p-12 md:p-20 transition-transform duration-1000 group-hover:scale-110" 
                alt={product.name} 
              />
              
              {/* Clinical Badge Overlay */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur shadow-sm border border-zinc-100 px-4 py-2 rounded-full flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#002D40]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-900">Clinically Tested</span>
              </div>

             
            </div>

            {/* Thumbnail Gallery (Placeholder) */}
            <div className="flex gap-4">
               <div className="w-24 h-24 bg-[#FAF9F6] border-2 border-[#002D40] rounded-2xl p-2 shadow-sm">
                  <img src={product.image} className="w-full h-full object-contain" />
               </div>
            </div>
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="space-y-6 border-b border-zinc-100 pb-10">
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#002D40] opacity-60">
                   {product.brand || "Gerka Selection"}
                </p>
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                    {product.name}
                </h1>
                <div className="flex items-center gap-6 pt-2">
                   <p className="text-3xl font-bold text-zinc-900">€{product.price.toFixed(2)}</p>
                   <span className="px-3 py-1 bg-zinc-100 text-zinc-500 rounded-lg text-xs font-medium uppercase tracking-widest">{product.size}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-emerald-600 text-[11px] font-bold uppercase tracking-[0.1em]">
                <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Check size={14} strokeWidth={3} />
                </div>
                In Stock | Guaranteed Clinical Formulation
              </div>

              <p className="text-zinc-500 font-light leading-relaxed text-lg italic">
                {product.shortDesc}
              </p>

              {/* SKIN TYPE TARGETING */}
              <div className="space-y-4 pt-4">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Target Skin Types</p>
                 <div className="flex gap-10">
                    {product.skinTypes.map(type => (
                      <div key={type} className="flex flex-col items-center gap-3">
                         <div className="w-16 h-16 rounded-full bg-[#002D40] flex items-center justify-center text-white border-4 border-zinc-50 shadow-md">
                           {type.toLowerCase() === "oily" ? <Droplets size={24} /> : <Sparkles size={24} />}
                         </div>
                         <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 text-center leading-tight">
                            {type}<br/>Skin
                         </span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* INTERACTIVE CART SECTION (Client Component) */}
            <div className="py-10">
               <AddToCartSection product={product} />
            </div>

            {/* CLINICAL DISCLOSURES (Accordions) */}
            <div className="space-y-1">
              {[
                { label: "Description", content: product.description, icon: <Info size={16}/> },
                { label: "Clinical Application", content: product.howToUse, icon: <ChevronRight size={16}/> },
                { label: "Medical Ingredients", content: product.ingredients, icon: <ShieldCheck size={16}/> }
              ].map((section) => (
                <details key={section.label} className="group border-b border-zinc-100 last:border-0">
                  <summary className="flex justify-between items-center py-6 cursor-pointer list-none">
                    <div className="flex items-center gap-3">
                       <span className="text-zinc-300">{section.icon}</span>
                       <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-800">{section.label}</span>
                    </div>
                    <div className="relative w-4 h-4">
                        <Plus size={16} className="absolute inset-0 group-open:rotate-45 transition-transform text-zinc-400" />
                    </div>
                  </summary>
                  <div className="pb-8 text-zinc-500 font-light text-[15px] leading-relaxed whitespace-pre-wrap pl-7">
                    {section.content || "Contact our clinical specialists for specific formulation details."}
                  </div>
                </details>
              ))}
            </div>

            {/* TRUST MARKER */}
            <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center gap-4">
                <Info size={20} className="text-zinc-400" />
                <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest leading-relaxed">
                   Usage of medical-grade skincare should be performed under professional guidance. 
                   <Link href="/#contact" className="text-zinc-900 underline ml-1">Book a free skin assessment.</Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
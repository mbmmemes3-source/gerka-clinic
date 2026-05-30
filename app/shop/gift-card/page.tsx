"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  ChevronRight, 
  ShieldCheck, 
  Info,
  ArrowLeft,
  Check
} from "lucide-react"
import Link from "next/link"
import AddToCartSection from "@/components/shop/AddToCartSection"

const AMOUNTS = [25, 50, 100, 150, 200, 300, 400, 500]

export default function GiftCardPage() {
  const [selectedAmount, setSelectedAmount] = useState(25)

  // Stripe requires absolute URLs for images. 
  // This gets your current domain (e.g., https://yourwebsite.com)
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.NEXT_PUBLIC_APP_URL || "https://gerkaclinic.com";

  // Constructing the Virtual Product for your existing Cart System
  const virtualProduct = {
    id: `gift-card-${selectedAmount}`,
    name: `Digital Gift Card (€${selectedAmount})`,
    brand: "Gerka Clinic",
    price: selectedAmount, 
    // FIX: Using absolute URL to prevent Stripe "Not a valid URL" error
    image: `${baseUrl}/gift.png`, 
    size: "Digital e-Gift",
    shortDesc: "Delivered instantly via email. Valid for all clinic treatments and products.",
    skinTypes: ["All"],
    categoryId: "gift-vouchers",
    description: "Gerka Clinic e-gift cards are the perfect gift for any occasion. Valid for all clinical treatments and product purchases.",
    howToUse: "The digital voucher will be sent to your email. Enter the unique code at checkout to redeem.",
    ingredients: "Digital Delivery"
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
          <span className="text-zinc-300">Vouchers</span>
          <span className="h-[1px] w-4 bg-zinc-200" />
          <span className="text-zinc-900">e-Gift Cards</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT: VISUALS --- */}
          <div className="lg:col-span-6">
            <div className="aspect-square bg-[#FAF9F6] rounded-[3.5rem] overflow-hidden relative border border-zinc-100 shadow-inner group flex items-center justify-center p-12">
              <motion.img 
                key={selectedAmount}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src="/gift.png" 
                className="w-full h-full object-contain drop-shadow-2xl" 
                alt="E-Gift Card" 
              />
              
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur shadow-sm border border-zinc-100 px-4 py-2 rounded-full flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#002D40]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-900">Instant Delivery</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTENT --- */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="space-y-6 border-b border-zinc-100 pb-10">
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#002D40] opacity-60">
                   Gerka Clinic
                </p>
                <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                    e-Gift Cards
                </h1>
                <div className="pt-4">
                   <p className="text-3xl font-bold text-zinc-900">€{selectedAmount.toFixed(2)}</p>
                   <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Digital Voucher</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-emerald-600 text-[11px] font-bold uppercase tracking-[0.1em]">
                <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Check size={14} strokeWidth={3} />
                </div>
                In Stock | Guaranteed Digital Delivery
              </div>

              <p className="text-zinc-500 font-light leading-relaxed text-lg italic">
                {virtualProduct.shortDesc}
              </p>

              {/* DENOMINATION SELECTION */}
              <div className="space-y-4 pt-4">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Select Amount</p>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {AMOUNTS.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 px-4 rounded-full text-[11px] font-bold transition-all border ${
                          selectedAmount === amount
                            ? "bg-[#002D40] text-white border-[#002D40] shadow-lg shadow-zinc-200"
                            : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        €{amount.toFixed(2)} EUR
                      </button>
                    ))}
                 </div>
              </div>
            </div>

            {/* CART ACTION SECTION */}
            <div className="py-10">
               <AddToCartSection product={virtualProduct as any} />
            </div>

            

            {/* TERMS MARKER */}
            <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center gap-4">
                <Info size={20} className="text-zinc-400" />
                <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest leading-relaxed">
                   Vouchers are non-refundable and cannot be exchanged for cash. 
                   Valid for 60 months from the date of issue.
                </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
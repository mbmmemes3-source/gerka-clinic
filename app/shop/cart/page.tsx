"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowLeft, 
  ChevronRight, 
  ShieldCheck,
  CreditCard
} from "lucide-react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { cart, removeFromCart, addToCart, cartCount } = useCart()

  // Calculate Subtotal
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  // Helper for quantity updates
  const updateQty = (item: any, delta: number) => {
    if (delta === -1 && item.quantity === 1) {
        removeFromCart(item.id)
    } else {
        addToCart(item, delta)
    }
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-zinc-200 pb-8">
          <div className="space-y-2">
            <Link href="/shop" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors mb-4">
               <ArrowLeft size={14} /> Back to collections
            </Link>
            <h1 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight">
              Your <span className="italic font-serif text-zinc-500">Shopping Bag</span>
            </h1>
          </div>
          <p className="text-zinc-400 text-sm font-light uppercase tracking-widest">
            {cartCount} Items Selected
          </p>
        </div>

        <AnimatePresence mode="wait">
          {cart.length === 0 ? (
            /* EMPTY STATE */
            <motion.div 
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center space-y-8 bg-white rounded-[3rem] border border-zinc-100 shadow-sm"
            >
              <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center mx-auto text-zinc-300">
                <ShoppingBag size={32} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-light text-zinc-900">Your bag is currently empty</h2>
                <p className="text-zinc-400 font-light text-sm max-w-xs mx-auto leading-relaxed">
                  Discover our clinical formulations selected for high-performance skin results.
                </p>
              </div>
              <Link href="/shop" className="inline-block">
                <button className="bg-zinc-900 text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all shadow-xl">
                  Explore Shop
                </button>
              </Link>
            </motion.div>
          ) : (
            /* CART CONTENT */
            <div key="content" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* LEFT: ITEMS LIST */}
              <div className="lg:col-span-8 space-y-4">
                {cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white border border-zinc-100 p-6 rounded-[2rem] flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-all"
                  >
                    <div className="w-32 h-32 bg-[#FAF9F6] rounded-2xl overflow-hidden shrink-0 p-4 border border-zinc-50 shadow-inner">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    
                    <div className="flex-1 space-y-1 text-center sm:text-left">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{item.brand || "Gerka Selection"}</p>
                      <h3 className="text-lg font-medium text-zinc-900">{item.name}</h3>
                      <p className="text-zinc-800 font-bold text-sm">€{item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Quantity controls */}
                        <div className="flex items-center gap-4 bg-zinc-50 border border-zinc-100 rounded-full px-4 py-2">
                           <button onClick={() => updateQty(item, -1)} className="text-zinc-400 hover:text-zinc-900 transition-colors"><Minus size={14}/></button>
                           <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                           <button onClick={() => updateQty(item, 1)} className="text-zinc-400 hover:text-zinc-900 transition-colors"><Plus size={14}/></button>
                        </div>

                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-3 text-zinc-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT: SUMMARY CARD */}
              <aside className="lg:col-span-4">
                <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-10 shadow-lg sticky top-32 space-y-8">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-900 border-b border-zinc-100 pb-4">
                      Order Summary
                   </h3>

                   <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                         <span className="text-zinc-400 font-light">Subtotal</span>
                         <span className="text-zinc-900 font-medium">€{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-zinc-400 font-light">Shipping</span>
                         <span className="text-zinc-900 font-medium italic text-xs">Calculated at next step</span>
                      </div>
                      <div className="pt-4 border-t border-zinc-100 flex justify-between items-baseline">
                         <span className="text-sm font-bold uppercase tracking-widest text-zinc-900">Total</span>
                         <span className="text-3xl font-bold text-zinc-900">€{subtotal.toFixed(2)}</span>
                      </div>
                   </div>

                   {/* FIX: LINK TO CHECKOUT PAGE INSTEAD OF CALLING API DIRECTLY */}
                   <Link href="/shop/checkout" className="block w-full">
                    <button className="w-full bg-[#002D40] text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] shadow-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 active:scale-95">
                        Checkout Details <ChevronRight size={16}/>
                    </button>
                   </Link>

                   <div className="space-y-4 pt-4">
                      <div className="flex items-start gap-3 opacity-60">
                         <ShieldCheck size={16} className="text-zinc-400 mt-0.5 shrink-0" />
                         <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Secure Clinical Transaction</p>
                      </div>
                      <div className="flex items-start gap-3 opacity-60">
                         <CreditCard size={16} className="text-zinc-400 mt-0.5 shrink-0" />
                         <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">Verified Payment Gateway</p>
                      </div>
                   </div>
                </div>
              </aside>

            </div>
          )}
        </AnimatePresence>

      </div>
    </main>
  )
}
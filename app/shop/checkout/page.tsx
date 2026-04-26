"use client"

import React, { useState } from "react"
import { useCart } from "@/context/CartContext"
import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck, Loader2, Lock } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const { cart, cartCount } = useCart()
  const [loading, setLoading] = useState(false)
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    country: "Ireland"
  })

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) return
    setLoading(true)

    // IMPORTANT: Ensure keys match exactly with the API route
    const payload = {
      customerDetails: formData, // Object containing address/phone
      customerEmail: formData.email, // String
      items: cart, // Array of products
      amount: subtotal // Number
    }

    try {
      const response = await fetch("/api/shop/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error(data.error || "Checkout Session Failed")
      }
    } catch (err: any) {
      console.error("Frontend Error:", err)
      alert(err.message || "Error processing order.")
      setLoading(false)
    }
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* FORM SIDE */}
        <div className="lg:col-span-7 space-y-8">
          <Link href="/shop/cart" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
            <ArrowLeft size={14} /> Back to bag
          </Link>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-light text-zinc-900 tracking-tight leading-none">
                Shipping <span className="italic font-serif text-zinc-500">Details.</span>
            </h1>
            <p className="text-zinc-500 text-sm font-light italic">Clinical delivery information required.</p>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Full Name</label>
                <input required placeholder="Enter your full name" className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Email</label>
                <input required type="email" placeholder="email@example.com" className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Phone</label>
                <input required type="tel" placeholder="+353" className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Street Address</label>
                <input required placeholder="House number and street name" className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">City</label>
                <input required placeholder="e.g. Dublin" className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Eircode / Postcode</label>
                <input required placeholder="e.g. A94 NH31" className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" value={formData.postcode} onChange={e => setFormData({...formData, postcode: e.target.value})} />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || cart.length === 0}
              className="w-full bg-zinc-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl flex items-center justify-center gap-4 active:scale-[0.98] disabled:bg-zinc-200 transition-all"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <>Confirm & Pay €{subtotal.toFixed(2)} <Lock size={14}/></>}
            </button>
          </form>
        </div>

        {/* SUMMARY SIDE */}
        <aside className="lg:col-span-5">
            <div className="bg-white border border-zinc-100 p-8 md:p-10 rounded-[3rem] sticky top-32 space-y-8 shadow-sm">
                <div className="flex justify-between items-center border-b border-zinc-50 pb-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Order Summary</h3>
                    <span className="text-[10px] bg-zinc-50 px-2 py-1 rounded text-zinc-400 font-bold">{cartCount} Items</span>
                </div>
                
                <div className="space-y-4 max-h-[350px] overflow-y-auto custom-scrollbar pr-2">
                    {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 items-center">
                            <div className="w-16 h-16 bg-[#FAF9F6] rounded-2xl p-2 shrink-0 border border-zinc-50">
                                <img src={item.image} className="w-full h-full object-contain" alt={item.name} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-zinc-900 truncate">{item.name}</p>
                                <p className="text-[10px] text-zinc-400 uppercase tracking-tighter mt-0.5">Quantity: {item.quantity}</p>
                            </div>
                            <p className="text-sm font-bold text-zinc-800">€{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <div className="pt-6 border-t border-zinc-100 flex justify-between items-baseline">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Total Amount</span>
                    <span className="text-3xl font-bold text-zinc-900">€{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-3 opacity-40">
                    <ShieldCheck size={16} />
                    <p className="text-[9px] uppercase font-bold tracking-widest">Authorized Clinical Boutique</p>
                </div>
            </div>
        </aside>
      </div>
    </main>
  )
}
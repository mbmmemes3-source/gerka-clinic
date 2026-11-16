"use client"

import React, { useState, useEffect } from "react"
import { useCart } from "@/context/CartContext"
import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck, Loader2, Lock, Truck, Store, Gift } from "lucide-react"
import Link from "next/link"
import { sendNotificationEmail } from "@/lib/send-email"

export default function CheckoutPage() {
  const { cart, cartCount } = useCart()
  const [loading, setLoading] = useState(false)
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  // Check if cart contains only gift cards or digital products
  const isOnlyGiftCards = cart.length > 0 && cart.every(item => 
    item.id?.startsWith("gift-card-") || 
    item.name?.toLowerCase().includes("gift card") ||
    item.name?.toLowerCase().includes("voucher")
  )

  // Delivery method: "delivery" | "pickup" (pickup is free)
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    country: "Ireland"
  })

  // Determine if address has been entered yet
  const hasEnteredAddress = formData.city.trim().length > 0 || formData.postcode.trim().length > 0

  // Determine if address is in Dublin based on city or postcode (defaults to true if address not yet entered)
  const isDublin = !hasEnteredAddress || 
    formData.city.trim().toLowerCase().includes("dublin") ||
    formData.postcode.trim().toUpperCase().startsWith("D") ||
    formData.postcode.trim().toUpperCase().startsWith("A94") || // Stillorgan/Blackrock area
    formData.postcode.trim().toUpperCase().startsWith("A96") // Dun Laoghaire

  // Shipping calculation:
  // - Gift cards only: €0
  // - Clinic pickup: €0 (Free)
  // - Delivery in Dublin (or before entering address): €5.00
  // - Delivery outside Dublin: €7.50
  const shippingCost = isOnlyGiftCards 
    ? 0 
    : deliveryMethod === "pickup" 
      ? 0 
      : isDublin 
        ? 5.00 
        : 7.50

  const grandTotal = subtotal + shippingCost

  // ✅ Send Email Notification via Resend
  const sendEmailNotification = async () => {
    // Format cart items for email
    const itemsList = cart.map(item => 
      `${item.name} × ${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`
    ).join("\n");

    const deliveryNote = isOnlyGiftCards
      ? "Digital Delivery (e-Gift Card via Email)"
      : deliveryMethod === "pickup"
        ? "Clinic Pickup (FREE) - 1 Priory Office Park, Stillorgan Rd, Dublin, A94NH31"
        : `Standard Delivery (€${shippingCost.toFixed(2)}) - ${isDublin ? "Dublin" : "Outside Dublin"}`;

    const shippingAddress = deliveryMethod === "pickup" || isOnlyGiftCards
      ? `${formData.address || "N/A"}, ${formData.city || "N/A"}, ${formData.postcode || "N/A"}, ${formData.country} (${deliveryNote})`
      : `${formData.address}, ${formData.city}, ${formData.postcode}, ${formData.country} (${deliveryNote})`;

    const templateParams = {
      patient_name: formData.name,
      patient_email: formData.email,
      patient_phone: formData.phone,
      service_requested: isOnlyGiftCards ? "Shop Order - Digital Gift Card" : `Shop Order (${deliveryMethod === "pickup" ? "Pickup" : "Delivery"})`,
      booking_fee: `€${grandTotal.toFixed(2)} (Subtotal: €${subtotal.toFixed(2)} + Shipping: €${shippingCost.toFixed(2)})`,
      preferred_time: `Fulfillment: ${deliveryNote}\n\nAddress: ${shippingAddress}\n\nItems:\n${itemsList}`,
      subject: `New Shop Order from ${formData.name} - €${grandTotal.toFixed(2)}`,
    };

    try {
      const response = await sendNotificationEmail(templateParams);
      return response;
    } catch (error) {
      console.error("Resend Error:", error);
      throw error;
    }
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) return
    setLoading(true)

    try {
      // 1. Send Email Notification First
      await sendEmailNotification();

      // --- STRIPE IMAGE FIX FOR GERKACLINIC.COM ---
      const domain = "https://gerkaclinic.com"

      const sanitizedCart = cart.map(item => {
          let stripeImageUrl = item.image;

          if (stripeImageUrl.startsWith('/')) {
              stripeImageUrl = `${domain}${stripeImageUrl}`;
          }

          const isValid = stripeImageUrl.startsWith('http') && !stripeImageUrl.includes('localhost');

          return {
              ...item,
              image: isValid ? stripeImageUrl : ""
          };
      });

      const payload = {
        customerDetails: {
          ...formData,
          deliveryMethod: isOnlyGiftCards ? "digital" : deliveryMethod,
          isDublin: !isOnlyGiftCards && deliveryMethod === "delivery" ? isDublin : false,
        },
        customerEmail: formData.email,
        items: sanitizedCart,
        amount: grandTotal,
        shippingCost: shippingCost,
        deliveryMethod: isOnlyGiftCards ? "digital" : deliveryMethod === "pickup" ? "pickup" : (isDublin ? "dublin" : "outside-dublin")
      }

      // 2. Create Stripe Checkout Session
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
      console.error("Checkout Error:", err)
      alert(err.message || "Error processing your order. Please try again.")
    } finally {
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
                {isOnlyGiftCards ? "Voucher " : "Checkout & "}<span className="italic font-serif text-zinc-500">{isOnlyGiftCards ? "Details." : "Shipping."}</span>
            </h1>
            <p className="text-zinc-500 text-sm font-light italic">
              {isOnlyGiftCards ? "Digital voucher delivered instantly via email." : "Clinical delivery and collection options."}
            </p>
          </div>

          <form onSubmit={handleCheckout} className="space-y-6">

            {/* FULFILLMENT METHOD SELECTOR (Hidden if cart only contains gift cards) */}
            {!isOnlyGiftCards ? (
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Fulfillment Method</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Delivery option */}
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod("delivery")}
                    className={`p-5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                      deliveryMethod === "delivery"
                        ? "border-zinc-900 bg-white shadow-md"
                        : "border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Truck size={16} className={deliveryMethod === "delivery" ? "text-zinc-900" : "text-zinc-400"} />
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">Delivery</span>
                      </div>
                      <span className="text-xs font-bold text-zinc-900">
                        {isDublin ? "From €5.00" : "€7.50"}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                      €5.00 in Dublin | €7.50 outside Dublin. Direct to your door.
                    </p>
                  </button>

                  {/* Free Clinic Pickup option */}
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod("pickup")}
                    className={`p-5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between ${
                      deliveryMethod === "pickup"
                        ? "border-zinc-900 bg-white shadow-md"
                        : "border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Store size={16} className={deliveryMethod === "pickup" ? "text-zinc-900" : "text-zinc-400"} />
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-900">Clinic Pickup</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">FREE</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                      Collect at Gerka Clinic, Stillorgan Rd, Dublin (A94 NH31).
                    </p>
                  </button>

                </div>
              </div>
            ) : (
              <div className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3">
                <Gift className="text-emerald-600 shrink-0" size={18} />
                <p className="text-xs text-emerald-900 font-light">
                  <span className="font-semibold">Digital e-Gift Card:</span> No shipping fees apply. Sent directly to your email upon payment.
                </p>
              </div>
            )}

            {/* CUSTOMER DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Full Name</label>
                <input 
                  required 
                  placeholder="Enter your full name" 
                  className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Email</label>
                <input 
                  required 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Phone</label>
                <input 
                  required 
                  type="tel" 
                  placeholder="+353" 
                  className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})} 
                />
              </div>

              {/* ADDRESS FIELDS - Only required when delivery is selected */}
              {!isOnlyGiftCards && deliveryMethod === "delivery" && (
                <>
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Street Address</label>
                    <input 
                      required 
                      placeholder="House number and street name" 
                      className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" 
                      value={formData.address} 
                      onChange={e => setFormData({...formData, address: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">
                      City / Area {isDublin && <span className="text-emerald-600 font-semibold">(Dublin: €5.00)</span>}
                    </label>
                    <input 
                      required 
                      placeholder="e.g. Dublin" 
                      className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" 
                      value={formData.city} 
                      onChange={e => setFormData({...formData, city: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest ml-2">Eircode / Postcode</label>
                    <input 
                      required 
                      placeholder="e.g. A94 NH31 or D02..." 
                      className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all text-sm" 
                      value={formData.postcode} 
                      onChange={e => setFormData({...formData, postcode: e.target.value})} 
                    />
                  </div>
                </>
              )}

              {/* CLINIC PICKUP ADDRESS NOTICE */}
              {!isOnlyGiftCards && deliveryMethod === "pickup" && (
                <div className="md:col-span-2 bg-zinc-50 border border-zinc-200 p-4 rounded-2xl text-xs text-zinc-600 space-y-1">
                  <p className="font-bold uppercase tracking-wider text-zinc-900">Collection Location:</p>
                  <p>Gerka Clinic, 1 Priory Office Park, Stillorgan Rd, Dublin, A94NH31</p>
                  <p className="text-[10px] text-zinc-400 pt-1">You will receive an email notification when your order is packed and ready for pickup.</p>
                </div>
              )}
            </div>

            <button 
              type="submit" 
              disabled={loading || cart.length === 0}
              className="w-full bg-zinc-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl flex items-center justify-center gap-4 active:scale-[0.98] disabled:bg-zinc-200 transition-all"
            >
              {loading ? (
                <>Processing... <Loader2 className="animate-spin" size={18} /></>
              ) : (
                <>Confirm & Pay €{grandTotal.toFixed(2)} <Lock size={14}/></>
              )}
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

                <div className="pt-4 border-t border-zinc-100 space-y-3">
                    <div className="flex justify-between text-xs text-zinc-500">
                        <span>Products Subtotal</span>
                        <span className="text-zinc-900 font-medium">€{subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-xs text-zinc-500 items-center">
                        <span>
                          {isOnlyGiftCards 
                            ? "Digital Delivery" 
                            : deliveryMethod === "pickup" 
                              ? "Clinic Pickup" 
                              : !hasEnteredAddress
                                ? "Delivery (From €5 Dublin)"
                                : isDublin 
                                  ? "Dublin Delivery" 
                                  : "Delivery (Outside Dublin)"}
                        </span>
                        <span className={shippingCost === 0 ? "text-emerald-600 font-bold uppercase text-[10px]" : "text-zinc-900 font-medium"}>
                          {shippingCost === 0 ? "FREE" : `€${shippingCost.toFixed(2)}`}
                        </span>
                    </div>

                    <div className="pt-3 border-t border-zinc-100 flex justify-between items-baseline">
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Total Amount</span>
                        <span className="text-3xl font-bold text-zinc-900">€{grandTotal.toFixed(2)}</span>
                    </div>
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

"use client"

import React, { useState, useEffect } from "react"
import { 
  Mail, Phone, MapPin, Clock, CheckCircle2, 
  Truck, RefreshCcw, ExternalLink, PackageCheck, Loader2 
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"READY" | "SHIPPED">("READY")
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/shop/orders")
      const data = await res.json()
      setOrders(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchOrders() }, [])

  // Filter orders based on status
  // Ready to Ship = PAID
  // Shipped = SHIPPED
  const readyToShip = orders.filter(o => o.status === 'PAID')
  const shippedOrders = orders.filter(o => o.status === 'SHIPPED')

  const handleMarkAsShipped = async (orderId: string) => {
    setUpdatingId(orderId)
    try {
      const res = await fetch("/api/admin/shop/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: orderId, status: "SHIPPED" })
      })

      if (res.ok) {
        // Update local state without full refresh for better UX
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: "SHIPPED" } : o))
      }
    } catch (err) {
      alert("Failed to update order status")
    } finally {
      setUpdatingId(null)
    }
  }

  const currentList = activeTab === "READY" ? readyToShip : shippedOrders

  return (
    <div className="p-8 md:p-12 lg:p-16 space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-light text-zinc-900 tracking-tight">Shop Orders</h1>
          <p className="text-zinc-500 text-sm font-light italic">Process clinical shipments and track delivery history.</p>
        </div>
        <button onClick={fetchOrders} className="p-2.5 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors shadow-sm">
          <RefreshCcw size={16} className={loading ? "animate-spin text-zinc-400" : "text-zinc-400"} />
        </button>
      </header>

      {/* --- TAB NAVIGATION --- */}
      <div className="flex gap-8 border-b border-zinc-200">
        <button 
          onClick={() => setActiveTab("READY")}
          className={`pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === 'READY' ? 'text-zinc-900' : 'text-zinc-400'}`}
        >
          Ready to Ship ({readyToShip.length})
          {activeTab === 'READY' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900" />}
        </button>
        <button 
          onClick={() => setActiveTab("SHIPPED")}
          className={`pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === 'SHIPPED' ? 'text-zinc-900' : 'text-zinc-400'}`}
        >
          Shipped ({shippedOrders.length})
          {activeTab === 'SHIPPED' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900" />}
        </button>
      </div>

      {/* --- ORDERS LIST --- */}
      <div className="grid grid-cols-1 gap-8">
        {loading ? (
          [1, 2].map(i => <div key={i} className="h-64 bg-zinc-100 rounded-[3rem] animate-pulse" />)
        ) : currentList.length === 0 ? (
          <div className="py-24 text-center border-2 border-dashed border-zinc-100 rounded-[3rem] space-y-4">
             <PackageCheck className="mx-auto text-zinc-200" size={48} />
             <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-bold">No orders found in this category</p>
          </div>
        ) : (
          currentList.map((order) => (
            <motion.div 
              layout
              key={order.id} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="bg-[#FAF9F6] px-8 py-4 border-b border-zinc-100 flex justify-between items-center">
                 <div className="flex gap-4 items-center">
                    <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      order.status === 'SHIPPED' ? 'bg-zinc-900 text-white' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    }`}>
                      {order.status === 'PAID' ? 'Ready to Ship' : order.status}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-2">
                       <Clock size={12}/> {new Date(order.createdAt).toLocaleString()}
                    </span>
                 </div>
                 <p className="text-[9px] font-bold text-zinc-300 tracking-tighter uppercase">ID: {order.id.slice(-10)}</p>
              </div>

              <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4 space-y-6">
                  <h3 className="text-xl font-medium text-zinc-900">{order.customerDetails.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                      <Mail size={14}/> {order.customerEmail}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                      <Phone size={14}/> {order.customerDetails.phone}
                    </div>
                    <div className="flex items-start gap-3 text-sm text-zinc-500 font-light leading-relaxed">
                      <MapPin size={14} className="mt-1 shrink-0"/>
                      <span>{order.customerDetails.address}, {order.customerDetails.city}, {order.customerDetails.postcode}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6 border-l border-zinc-100 pl-10">
                   <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Items Purchased</p>
                   <div className="space-y-4">
                      {order.items.map((item: any, idx: number) => (
                        <div key={idx} className="flex gap-4 items-center">
                           <div className="w-12 h-12 bg-[#FAF9F6] rounded-xl p-1 border border-zinc-100 shrink-0">
                              <img src={item.image} className="w-full h-full object-contain" />
                           </div>
                           <div>
                              <p className="text-sm text-zinc-900 font-medium leading-none">{item.name}</p>
                              <p className="text-[10px] text-zinc-400 mt-1 uppercase">Qty: {item.quantity}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-between items-end border-l border-zinc-100 pl-10">
                   <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Grand Total</p>
                      <p className="text-4xl font-bold text-zinc-900">€{order.amount.toFixed(2)}</p>
                   </div>
                   
                   <div className="w-full space-y-3">
                      {order.status === "PAID" ? (
                        <button 
                          onClick={() => handleMarkAsShipped(order.id)}
                          disabled={updatingId === order.id}
                          className="w-full py-4 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all active:scale-95 disabled:bg-zinc-400"
                        >
                          {updatingId === order.id ? <Loader2 className="animate-spin" size={14} /> : <Truck size={14}/>}
                          Mark as Shipped
                        </button>
                      ) : (
                        <div className="w-full py-4 bg-zinc-100 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-default">
                           <CheckCircle2 size={14}/> Dispatch Completed
                        </div>
                      )}
                      
                      <a 
                        href={`https://dashboard.stripe.com/payments/${order.stripeSessionId}`} 
                        target="_blank"
                        className="w-full py-3 border border-zinc-200 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all"
                      >
                         Stripe Receipt <ExternalLink size={12}/>
                      </a>
                   </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
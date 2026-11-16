"use client"

import React, { useState, useEffect } from "react"
import { 
  Mail, Phone, MapPin, Clock, CheckCircle2, 
  Truck, RefreshCcw, ExternalLink, PackageCheck, Loader2, AlertCircle, Store
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"READY" | "SHIPPED" | "PENDING">("READY")
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
  // Pending Payment = PENDING or FAILED
  const readyToShip = orders.filter(o => o.status === 'PAID')
  const shippedOrders = orders.filter(o => o.status === 'SHIPPED')
  const pendingOrders = orders.filter(o => o.status === 'PENDING' || o.status === 'FAILED')

  const handleUpdateStatus = async (orderId: string, newStatus: string) => {
    setUpdatingId(orderId)
    try {
      const res = await fetch("/api/admin/shop/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: orderId, status: newStatus })
      })

      if (res.ok) {
        // Update local state without full refresh for better UX
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o))
      }
    } catch (err) {
      alert("Failed to update order status")
    } finally {
      setUpdatingId(null)
    }
  }

  const currentList = activeTab === "READY" 
    ? readyToShip 
    : activeTab === "SHIPPED" 
      ? shippedOrders 
      : pendingOrders

  return (
    <div className="p-8 md:p-12 lg:p-16 space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-light text-zinc-900 tracking-tight">Shop Orders</h1>
          <p className="text-zinc-500 text-sm font-light italic">Process clinical shipments, pending checkouts, and delivery history.</p>
        </div>
        <button onClick={fetchOrders} className="p-2.5 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors shadow-sm">
          <RefreshCcw size={16} className={loading ? "animate-spin text-zinc-400" : "text-zinc-400"} />
        </button>
      </header>

      {/* --- TAB NAVIGATION --- */}
      <div className="flex gap-8 border-b border-zinc-200 overflow-x-auto pb-px">
        <button 
          onClick={() => setActiveTab("READY")}
          className={`pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative shrink-0 ${activeTab === 'READY' ? 'text-zinc-900' : 'text-zinc-400'}`}
        >
          Ready to Ship ({readyToShip.length})
          {activeTab === 'READY' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900" />}
        </button>

        <button 
          onClick={() => setActiveTab("SHIPPED")}
          className={`pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative shrink-0 ${activeTab === 'SHIPPED' ? 'text-zinc-900' : 'text-zinc-400'}`}
        >
          Shipped ({shippedOrders.length})
          {activeTab === 'SHIPPED' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900" />}
        </button>

        <button 
          onClick={() => setActiveTab("PENDING")}
          className={`pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative shrink-0 flex items-center gap-2 ${activeTab === 'PENDING' ? 'text-amber-900 font-black' : 'text-zinc-400'}`}
        >
          <span>Pending Payment ({pendingOrders.length})</span>
          {pendingOrders.length > 0 && (
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          )}
          {activeTab === 'PENDING' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />}
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
          currentList.map((order) => {
            const isPickup = order.customerDetails?.deliveryMethod === "pickup";
            const isDigital = order.customerDetails?.deliveryMethod === "digital";
            const shippingCost = order.customerDetails?.shippingCost;

            return (
              <motion.div 
                layout
                key={order.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="bg-[#FAF9F6] px-8 py-4 border-b border-zinc-100 flex flex-wrap justify-between items-center gap-3">
                   <div className="flex flex-wrap gap-3 items-center">
                      <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                        order.status === 'SHIPPED' 
                          ? 'bg-zinc-900 text-white' 
                          : order.status === 'PAID'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {order.status === 'PAID' 
                          ? 'Ready to Ship' 
                          : order.status === 'PENDING'
                            ? 'Payment Pending'
                            : order.status}
                      </span>

                      {/* Fulfillment badge */}
                      {isPickup ? (
                        <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1.5">
                          <Store size={11} /> Clinic Pickup (FREE)
                        </span>
                      ) : isDigital ? (
                        <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-100">
                          Digital Voucher
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-zinc-100 text-zinc-600 flex items-center gap-1.5">
                          <Truck size={11} /> Delivery {shippingCost !== undefined ? `(€${Number(shippingCost).toFixed(2)})` : ""}
                        </span>
                      )}

                      <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-2">
                         <Clock size={12}/> {new Date(order.createdAt).toLocaleString()}
                      </span>
                   </div>
                   <p className="text-[9px] font-bold text-zinc-300 tracking-tighter uppercase">ID: {order.id.slice(-10)}</p>
                </div>

                <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4 space-y-6">
                    <h3 className="text-xl font-medium text-zinc-900">{order.customerDetails?.name || "Customer"}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                        <Mail size={14}/> {order.customerEmail}
                      </div>
                      {order.customerDetails?.phone && (
                        <div className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                          <Phone size={14}/> {order.customerDetails.phone}
                        </div>
                      )}
                      <div className="flex items-start gap-3 text-sm text-zinc-500 font-light leading-relaxed">
                        <MapPin size={14} className="mt-1 shrink-0"/>
                        <span>
                          {isPickup ? (
                            <span className="text-blue-900 font-medium">Customer chose Clinic Pickup (1 Priory Office Park, Stillorgan Rd, Dublin)</span>
                          ) : isDigital ? (
                            <span className="text-purple-900 font-medium">Delivered directly via email (Digital Gift Card)</span>
                          ) : (
                            `${order.customerDetails?.address || "Address not provided"}, ${order.customerDetails?.city || ""}, ${order.customerDetails?.postcode || ""}`
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-6 border-l border-zinc-100 pl-10">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Items Purchased</p>
                     <div className="space-y-4">
                        {order.items?.map((item: any, idx: number) => (
                          <div key={idx} className="flex gap-4 items-center">
                             <div className="w-12 h-12 bg-[#FAF9F6] rounded-xl p-1 border border-zinc-100 shrink-0">
                                {item.image ? (
                                  <img src={item.image} className="w-full h-full object-contain" alt={item.name} />
                                ) : (
                                  <div className="w-full h-full bg-zinc-100 rounded" />
                                )}
                             </div>
                             <div>
                                <p className="text-sm text-zinc-900 font-medium leading-none">{item.name}</p>
                                <p className="text-[10px] text-zinc-400 mt-1 uppercase">Qty: {item.quantity} · €{item.price?.toFixed(2)}</p>
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
                        {order.status === "PAID" && (
                          <button 
                            onClick={() => handleUpdateStatus(order.id, "SHIPPED")}
                            disabled={updatingId === order.id}
                            className="w-full py-4 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all active:scale-95 disabled:bg-zinc-400"
                          >
                            {updatingId === order.id ? <Loader2 className="animate-spin" size={14} /> : <Truck size={14}/>}
                            Mark as Shipped
                          </button>
                        )}

                        {order.status === "SHIPPED" && (
                          <div className="w-full py-4 bg-zinc-100 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-default">
                             <CheckCircle2 size={14}/> Dispatch Completed
                          </div>
                        )}

                        {order.status === "PENDING" && (
                          <div className="space-y-2 w-full">
                            <div className="w-full py-3 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                               <AlertCircle size={14}/> Awaiting Payment
                            </div>
                            <button 
                              onClick={() => handleUpdateStatus(order.id, "PAID")}
                              disabled={updatingId === order.id}
                              className="w-full py-2.5 bg-emerald-600 text-white rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 hover:bg-emerald-700 transition-all active:scale-95 disabled:bg-zinc-300"
                            >
                              {updatingId === order.id ? <Loader2 className="animate-spin" size={12} /> : null}
                              Manually Mark as Paid
                            </button>
                          </div>
                        )}
                        
                        {order.stripeSessionId ? (
                          <a 
                            href={`https://dashboard.stripe.com/payments/${order.stripeSessionId}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 border border-zinc-200 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all"
                          >
                             Stripe Receipt <ExternalLink size={12}/>
                          </a>
                        ) : null}
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  )
}

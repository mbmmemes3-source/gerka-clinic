"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShoppingBag, Plus, Trash2, 
  Loader2, RefreshCcw, X, Upload,
  CheckCircle2, Info, ChevronDown
} from "lucide-react"
import { CldUploadWidget } from 'next-cloudinary'

// --- INTERNAL COMPONENT: CLOUDINARY UPLOAD ---
interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  onRemove: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, onRemove }) => {
  
  // Helper to restore scrolling
  const restoreScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px'; // Cloudinary sometimes adds padding too
  };

  const handleSuccess = (result: any) => {
    if (result.event === "success") {
      onChange(result.info.secure_url);
      // Force scroll restoration after a small delay to ensure the widget is fully gone
      setTimeout(restoreScroll, 100);
    }
  };

  return (
    <div className="space-y-4 w-full">
      {value ? (
        <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-inner bg-zinc-50">
          <button 
            onClick={onRemove}
            type="button"
            className="absolute top-4 right-4 z-10 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors active:scale-95"
          >
            <X size={16} />
          </button>
          <img src={value} alt="Product" className="object-contain w-full h-full p-4" />
        </div>
      ) : (
        <CldUploadWidget 
          onSuccess={handleSuccess}
          // Also restore scroll if they just close the widget without uploading
          onClose={restoreScroll} 
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        >
          {({ open }) => {
            return (
              <div 
                onClick={() => open?.()}
                className="w-full aspect-[4/3] bg-[#FAF9F6] border-2 border-dashed border-zinc-200 rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 group cursor-pointer hover:border-zinc-400 transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-all">
                  <Upload size={20} className="text-zinc-400" />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Click to Upload Image</p>
                  <p className="text-[9px] text-zinc-300 lowercase font-light">Cloudinary Secure Upload</p>
                </div>
              </div>
            );
          }}
        </CldUploadWidget>
      )}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: { name: string };
  skinTypes: string[];
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const skinTypeOptions = ["Oily", "Dry", "Combination", "Sensitive", "Normal", "Aging"]

  const [form, setForm] = useState({
    name: "", brand: "SkinCeuticals", price: "", size: "", 
    categoryId: "", shortDesc: "", ingredients: "", howToUse: "", 
    image: "", skinTypes: [] as string[]
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [prodRes, catRes] = await Promise.all([
        fetch("/api/admin/shop/products"),
        fetch("/api/admin/shop/categories")
      ])
      const prodData = await prodRes.json()
      const catData = await catRes.json()
      setProducts(Array.isArray(prodData) ? prodData : [])
      setCategories(Array.isArray(catData) ? catData : [])
    } catch (err) {
      console.error("Fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSkinTypeToggle = (type: string) => {
    setForm(prev => ({
      ...prev,
      skinTypes: prev.skinTypes.includes(type) 
        ? prev.skinTypes.filter(t => t !== type) 
        : [...prev.skinTypes, type]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.image) return alert("Please upload an image first.")
    if (!form.categoryId) return alert("Please select a category.")
    
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/admin/shop/products", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" }
      })
      if (res.ok) {
        setShowForm(false)
        setForm({ name: "", brand: "SkinCeuticals", price: "", size: "", categoryId: "", shortDesc: "", ingredients: "", howToUse: "", image: "", skinTypes: [] })
        fetchData()
      }
    } catch (err) {
      alert("Error saving product")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this clinical product?")) return
    await fetch(`/api/admin/shop/products?id=${id}`, { method: "DELETE" })
    fetchData()
  }

  return (
    <div className="p-8 md:p-12 lg:p-16 space-y-12">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-light text-zinc-900 tracking-tight">Product Inventory</h1>
          <p className="text-zinc-500 text-sm font-light italic leading-relaxed text-zinc-400">Manage formulations and assign them to clinical categories.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-xl flex items-center gap-2 hover:bg-zinc-800 transition-all active:scale-95"
        >
          {showForm ? <X size={14} /> : <Plus size={14} />}
          {showForm ? "Cancel Entry" : "Add Product"}
        </button>
      </section>

      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 rounded-[3rem] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Clinical Photography</label>
                    <ImageUpload 
                      value={form.image}
                      onChange={(url) => setForm({ ...form, image: url })}
                      onRemove={() => setForm({ ...form, image: "" })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Brand</label>
                      <input className="admin-input" placeholder="SkinCeuticals" value={form.brand} onChange={e => setForm({...form, brand: e.target.value})} />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Category</label>
                      <div className="relative">
                        <select 
                          required 
                          className="admin-input appearance-none pr-10" 
                          value={form.categoryId} 
                          onChange={e => setForm({...form, categoryId: e.target.value})}
                        >
                          <option value="">Select Category</option>
                          {categories.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Product Name</label>
                    <input required className="admin-input" placeholder="Phloretin CF" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Price (€)</label>
                      <input required type="number" step="0.01" className="admin-input" placeholder="185.00" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Volume/Size</label>
                      <input className="admin-input" placeholder="30ml" value={form.size} onChange={e => setForm({...form, size: e.target.value})} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Target Skin Types</label>
                    <div className="flex flex-wrap gap-2">
                      {skinTypeOptions.map(type => (
                        <button type="button" key={type} onClick={() => handleSkinTypeToggle(type)} className={`px-4 py-2 rounded-full border text-[10px] transition-all font-bold tracking-tighter ${form.skinTypes.includes(type) ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-400 border-zinc-100 hover:border-zinc-300'}`}>
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Short Description</label>
                    <textarea className="admin-input h-32 pt-4 resize-none text-[13px] leading-relaxed" placeholder="Summarise the primary benefit..." value={form.shortDesc} onChange={e => setForm({...form, shortDesc: e.target.value})} />
                  </div>
               </div>

               <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1 tracking-widest flex items-center gap-2"><Info size={12}/> How to Use</label>
                    <textarea className="admin-input h-40 pt-4 text-xs leading-relaxed" placeholder="Step-by-step application instructions..." value={form.howToUse} onChange={e => setForm({...form, howToUse: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1 tracking-widest flex items-center gap-2"><CheckCircle2 size={12}/> Clinical Ingredients</label>
                    <textarea className="admin-input h-40 pt-4 text-xs leading-relaxed" placeholder="List all active medical ingredients..." value={form.ingredients} onChange={e => setForm({...form, ingredients: e.target.value})} />
                  </div>
               </div>

               <div className="lg:col-span-2 pt-4">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-zinc-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl flex items-center justify-center gap-4 disabled:bg-zinc-300 transition-all active:scale-[0.99]">
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <><ShoppingBag size={18} /> Sync Product to Database</>}
                  </button>
               </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
           [1,2,3].map(i => <div key={i} className="h-48 bg-zinc-100 rounded-[2.5rem] animate-pulse border border-zinc-200" />)
        ) : (
          products.map((product) => (
            <div key={product.id} className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 hover:shadow-2xl transition-all group relative flex flex-col justify-between">
               <div className="flex gap-5 items-center">
                  <div className="w-24 h-24 bg-[#FAF9F6] rounded-3xl overflow-hidden shrink-0 border border-zinc-100 p-2 shadow-inner">
                    <img src={product.image} className="w-full h-full object-contain" alt={product.name} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{product.brand}</p>
                    <h4 className="text-base font-medium text-zinc-900 leading-tight">{product.name}</h4>
                    <p className="text-sm font-bold text-zinc-800 pt-1">€{product.price.toFixed(2)}</p>
                  </div>
               </div>
               <div className="mt-6 pt-4 border-t border-zinc-50 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase bg-zinc-50 px-4 py-1.5 rounded-full border border-zinc-100">
                    {product.category?.name || "Uncategorized"}
                  </span>
                  <button onClick={() => handleDelete(product.id)} className="text-zinc-300 hover:text-red-500 transition-colors p-2">
                    <Trash2 size={18}/>
                  </button>
               </div>
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        .admin-input {
          width: 100%;
          padding: 1rem;
          background-color: #FAF9F6;
          border-radius: 1.25rem;
          outline: none;
          border: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.875rem;
          color: #18181b;
        }
        .admin-input:focus {
          border-color: #d4d4d8;
          background-color: white;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
        }
      `}</style>
    </div>
  )
}
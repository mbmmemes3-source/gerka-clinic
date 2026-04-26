"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Layers, 
  Plus, 
  Trash2, 
  Loader2, 
  RefreshCcw, 
  Upload, 
  X, 
  CheckCircle2 
} from "lucide-react"
import { CldUploadWidget } from "next-cloudinary"

interface Category {
  id: string;
  name: string;
  image: string;
  _count: { products: number };
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Form State
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  // Restore scroll fix
  const restoreScroll = () => {
    document.body.style.overflow = "auto";
  };

  const fetchCategories = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/shop/categories")
      const data = await res.json()
      if (Array.isArray(data)) setCategories(data)
    } catch (err) {
      console.error("Fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  // FIXED: Prop renamed to onSuccess in newer versions
  const handleUploadSuccess = (result: any) => {
    if (result.event === "success") {
      setImage(result.info.secure_url);
      setTimeout(restoreScroll, 100);
    }
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !image) return alert("Please provide a name and upload an image.")
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/admin/shop/categories", {
        method: "POST",
        body: JSON.stringify({ name, image }),
        headers: { "Content-Type": "application/json" }
      })
      if (res.ok) {
        setName("")
        setImage("")
        fetchCategories()
      }
    } catch (err) {
      alert("Error creating category")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure? Products in this category will become uncategorized.")) return
    
    try {
      const res = await fetch(`/api/admin/shop/categories?id=${id}`, { method: "DELETE" })
      if (res.ok) fetchCategories()
    } catch (err) {
      alert("Error deleting category")
    }
  }

  return (
    <div className="p-8 md:p-12 lg:p-16 space-y-12">
      {/* HEADER SECTION */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-light text-zinc-900 tracking-tight">Shop Categories</h1>
          <p className="text-zinc-500 text-sm font-light italic leading-relaxed text-zinc-400">
            Organize clinical collections via Cloudinary & Neon.
          </p>
        </div>
        <button 
          onClick={fetchCategories} 
          className="p-3 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all active:scale-90 shadow-sm"
        >
          <RefreshCcw size={16} className={loading ? "animate-spin text-zinc-400" : "text-zinc-400"} />
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: ADD NEW CATEGORY FORM */}
        <div className="lg:col-span-4">
          <form onSubmit={handleCreate} className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 space-y-6 sticky top-24 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-900" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Add New Category</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Name</label>
                <input 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 bg-[#FAF9F6] border border-transparent rounded-2xl outline-none focus:bg-white focus:border-zinc-200 transition-all text-sm" 
                  placeholder="e.g. Serums" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Thumbnail</label>
                
                {image ? (
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-200 group">
                    <button 
                      type="button"
                      onClick={() => setImage("")}
                      className="absolute top-2 right-2 z-10 p-1.5 bg-red-500 text-white rounded-full shadow-lg opacity-100 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <CldUploadWidget 
                    onSuccess={handleUploadSuccess} 
                    onClose={restoreScroll}
                    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                  >
                    {({ open }) => (
                      <div 
                        onClick={() => open?.()}
                        className="w-full aspect-video bg-[#FAF9F6] border-2 border-dashed border-zinc-200 rounded-2xl flex flex-col items-center justify-center space-y-2 cursor-pointer hover:border-zinc-400 transition-all group"
                      >
                        <Upload size={20} className="text-zinc-300 group-hover:text-zinc-500 transition-colors" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Upload Image</span>
                      </div>
                    )}
                  </CldUploadWidget>
                )}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zinc-900 text-white py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all disabled:bg-zinc-300 active:scale-95 shadow-lg shadow-zinc-200"
              >
                {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
                Create Category
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: CATEGORY LIST */}
        <div className="lg:col-span-8">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-[16/10] bg-zinc-100 rounded-[2.5rem] animate-pulse border border-zinc-200" />
               ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AnimatePresence>
                {categories.map((cat) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={cat.id} 
                    className="group relative bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
                  >
                    <div className="aspect-[16/9] bg-zinc-50 overflow-hidden relative">
                      <img 
                        src={cat.image} 
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      <div className="absolute top-4 right-4">
                         <button 
                          onClick={() => handleDelete(cat.id)}
                          className="p-2.5 bg-white/90 backdrop-blur text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-sm active:scale-90"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="p-8 flex justify-between items-center bg-white">
                      <div className="space-y-1">
                        <h4 className="text-xl font-medium text-zinc-900 leading-none">{cat.name}</h4>
                        <div className="flex items-center gap-2 pt-2">
                           <CheckCircle2 size={12} className="text-emerald-500" />
                           <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{cat._count?.products || 0} Formulations</p>
                        </div>
                      </div>
                      <Layers size={20} className="text-zinc-100 group-hover:text-zinc-200 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
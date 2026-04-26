"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  ShoppingBag, 
  Droplets, 
  Sparkles,
  Filter,
  ArrowUpRight,
  Loader2
} from "lucide-react"
import Link from "next/link"
import { ShopBanner } from "@/components/shopBanner"

interface Category {
  id: string;
  name: string;
  image: string;
}

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  size: string;
  skinTypes: string[];
  categoryId: string;
  shortDesc: string;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSkinType, setSelectedSkinType] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const skinTypes = ["Oily", "Dry", "Combination", "Sensitive", "Normal", "Aging"]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch("/api/admin/shop/products"),
          fetch("/api/admin/shop/categories")
        ])
        
        const prodData = await prodRes.json()
        const catData = await catRes.json()

        // Defensive check: Ensure we are setting arrays
        // If your API wraps data (e.g., { products: [] }), this handles it
        setProducts(Array.isArray(prodData) ? prodData : (prodData.products || []))
        setCategories(Array.isArray(catData) ? catData : (catData.categories || []))
      } catch (err) {
        console.error("Error loading shop data:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Safely compute filtered products
  const filteredProducts = (Array.isArray(products) ? products : []).filter(product => {
    const matchesSearch = 
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === "All" || product.categoryId === selectedCategory
    
    // Safety check for skinTypes array
    const matchesSkin = selectedSkinType === "All" || 
      (Array.isArray(product.skinTypes) && product.skinTypes.includes(selectedSkinType))
    
    return matchesSearch && matchesCategory && matchesSkin
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    return 0
  })

  return (
    <main className="bg-[#FAF9F6] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <ShopBanner/>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
          
          {/* --- SIDEBAR FILTERS --- */}
          <aside className="lg:col-span-3 space-y-10">
            <div className="sticky top-32 space-y-10 bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm">
              
              {/* Search */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 flex items-center gap-2">
                  <Search size={14} className="text-zinc-400" /> Search
                </h4>
                <input 
                  type="text"
                  placeholder="Brand or product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm outline-none focus:bg-white focus:border-zinc-900 transition-all font-light"
                />
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">Collections</h4>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setSelectedCategory("All")}
                    className={`text-left text-sm py-1.5 transition-all flex justify-between items-center ${selectedCategory === "All" ? "text-zinc-900 font-semibold" : "text-zinc-400 hover:text-zinc-600"}`}
                  >
                    All Formulations {selectedCategory === "All" && <div className="w-1 h-1 bg-zinc-900 rounded-full" />}
                  </button>
                  {Array.isArray(categories) && categories.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-left text-sm py-1.5 transition-all flex justify-between items-center ${selectedCategory === cat.id ? "text-zinc-900 font-semibold" : "text-zinc-400 hover:text-zinc-600"}`}
                    >
                      {cat.name} {selectedCategory === cat.id && <div className="w-1 h-1 bg-zinc-900 rounded-full" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skin Types */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">Skin Type</h4>
                <div className="grid grid-cols-2 gap-2">
                   {["All", ...skinTypes].map(type => (
                     <button 
                        key={type}
                        onClick={() => setSelectedSkinType(type)}
                        className={`px-3 py-2 rounded-lg border text-[9px] uppercase font-bold tracking-widest transition-all ${selectedSkinType === type ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-400 border-zinc-100 hover:border-zinc-200'}`}
                     >
                       {type}
                     </button>
                   ))}
                </div>
              </div>
            </div>
          </aside>

          {/* --- PRODUCT GRID --- */}
          <div className="lg:col-span-9 space-y-8">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-zinc-200 rounded-2xl px-6 py-4 gap-4 shadow-sm">
               <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                {filteredProducts.length} Products Found
               </span>
               <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Sort By</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-xs font-medium text-zinc-900 outline-none cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
               </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1,2,3,4,5,6].map(i => <div key={i} className="aspect-[3/4] bg-white border border-zinc-200 rounded-[2rem] animate-pulse" />)}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={product.id}
                      className="group bg-white border border-zinc-200 rounded-[2rem] overflow-hidden flex flex-col hover:shadow-xl hover:border-zinc-300 transition-all duration-500"
                    >
                      <Link href={`/shop/${product.id}`} className="flex-1 flex flex-col">
                        {/* Image Compartment */}
                        <div className="aspect-square bg-[#FAF9F6] p-10 relative overflow-hidden flex items-center justify-center border-b border-zinc-100">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" 
                          />
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-md">
                            <ArrowUpRight size={16} className="text-zinc-400" />
                          </div>
                        </div>

                        {/* Content Compartment */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-1">
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 leading-none">
                              {product.brand}
                            </p>
                            <h3 className="text-base font-medium text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors">
                              {product.name}
                            </h3>
                          </div>

                          <div className="flex justify-between items-end pt-4">
                            <div className="space-y-1">
                               <p className="text-lg font-bold text-zinc-900">€{product.price?.toFixed(2)}</p>
                               <p className="text-[9px] font-medium text-zinc-400 uppercase tracking-widest leading-none">{product.size}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white shadow-lg group-hover:bg-[#002D40] transition-colors">
                               <ShoppingBag size={16} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredProducts.length === 0 && (
              <div className="py-32 text-center space-y-6 bg-white rounded-[3rem] border border-dashed border-zinc-200 shadow-inner">
                 <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto text-zinc-300 border border-zinc-100">
                   <Filter size={24} />
                 </div>
                 <div className="space-y-1">
                   <h3 className="text-xl font-light text-zinc-900 uppercase tracking-widest">No matching results</h3>
                   <p className="text-zinc-400 text-xs font-light max-w-xs mx-auto">Try refining your search terms or adjusting the selected skin type filters.</p>
                 </div>
                 <button 
                  onClick={() => {setSearchQuery(""); setSelectedCategory("All"); setSelectedSkinType("All");}}
                  className="bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200"
                 >
                   Reset Filters
                 </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  )
}
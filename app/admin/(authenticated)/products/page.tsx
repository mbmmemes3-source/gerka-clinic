"use client"
import React, { useState } from "react";
import { ShoppingBag, Upload, CheckCircle2 } from "lucide-react";

export default function AdminProductsPage() {
  const skinOptions = ["Oily", "Dry", "Combination", "Sensitive", "Normal"];
  
  return (
    <div className="p-8 md:p-16 max-w-5xl mx-auto space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-light text-zinc-900 tracking-tight">Product Management</h1>
        <p className="text-zinc-500 font-light italic">Create high-performance clinical products.</p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Product Name</label>
            <input className="w-full p-4 bg-white border border-zinc-200 rounded-2xl outline-none focus:border-zinc-900 transition-all font-light" placeholder="SkinCeuticals Phloretin CF" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Price (€)</label>
              <input type="number" className="w-full p-4 border border-zinc-200 rounded-2xl outline-none" placeholder="185.00" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Size (ml/g)</label>
              <input className="w-full p-4 border border-zinc-200 rounded-2xl outline-none" placeholder="30ml" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Skin Type Compatibility</label>
            <div className="flex flex-wrap gap-2">
              {skinOptions.map(opt => (
                <label key={opt} className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-100 rounded-full cursor-pointer hover:bg-zinc-50 transition-colors">
                  <input type="checkbox" className="rounded text-zinc-900" />
                  <span className="text-xs text-zinc-500 font-light">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="aspect-square bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-[3rem] flex flex-col items-center justify-center space-y-4 hover:border-zinc-400 transition-all cursor-pointer">
           <Upload size={32} className="text-zinc-300" />
           <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-center">Upload Image<br/><span className="lowercase font-light">(JPG, PNG, WebP)</span></p>
        </div>

        <div className="md:col-span-2 space-y-8 pt-8 border-t border-zinc-100">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Short Summary (Below Price)</label>
            <input className="w-full p-4 border border-zinc-200 rounded-2xl outline-none" placeholder="Helps prevent free radical damage..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">How to Use</label>
              <textarea className="w-full p-6 border border-zinc-200 rounded-[2rem] h-40 outline-none font-light text-sm" placeholder="Apply 4-5 drops..." />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Full Ingredients</label>
              <textarea className="w-full p-6 border border-zinc-200 rounded-[2rem] h-40 outline-none font-light text-sm" placeholder="Water, L-Ascorbic Acid..." />
            </div>
          </div>

          <button className="w-full bg-zinc-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 active:scale-95">
            <ShoppingBag size={18} /> Publish to Shop
          </button>
        </div>
      </form>
    </div>
  );
}
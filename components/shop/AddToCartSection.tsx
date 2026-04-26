"use client"

import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function AddToCartSection({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-6">
      {/* Quantity Selector */}
      <div className="flex items-center justify-between border-2 border-zinc-100 rounded-full px-6 py-4 w-full sm:w-44">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="hover:text-zinc-500 transition-colors"
        >
          <Minus size={18} />
        </button>
        <span className="font-bold text-lg w-8 text-center">{quantity}</span>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="hover:text-zinc-500 transition-colors"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Add Button */}
      <button 
        onClick={() => addToCart(product, quantity)}
        className="flex-1 bg-[#002D40] text-white rounded-full py-5 font-bold uppercase tracking-[0.2em] text-[11px] shadow-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 active:scale-95"
      >
        Add To Bag <ShoppingBag size={18} />
      </button>
    </div>
  );
}
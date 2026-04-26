import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Layers, 
  LogOut, 
  ArrowLeft, 
  Truck
} from "lucide-react";

export default async function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  // --- 1. SECURITY CHECK (Fixes the auto-logout issue) ---
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("admin_token");

  // If no cookie or wrong value, redirect to login immediately
  if (!authCookie || authCookie.value !== "authorized") {
    redirect("/admin");
  }

  const menuItems = [
    { name: "Bookings", href: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Categories", href: "/admin/shop/categories", icon: <Layers size={18} /> },
    { name: "Products", href: "/admin/shop/products", icon: <ShoppingBag size={18} /> },
    { name: "Orders", href: "/admin/shop/orders", icon: <Truck size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#FAF9F6]">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-zinc-200 flex flex-col sticky top-0 h-screen z-50">
        <div className="p-8 border-b border-zinc-50">
          <Link href="/" className="flex flex-col group">
            <span className="text-lg font-light tracking-[0.2em] text-zinc-900 uppercase">Gerka Admin</span>
            <span className="text-[8px] tracking-[0.3em] text-zinc-400 uppercase font-bold mt-1">Management Portal</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-all group"
            >
              <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-[11px] font-bold uppercase tracking-widest">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* --- BOTTOM SECTION --- */}
        <div className="p-4 border-t border-zinc-100 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-zinc-900 transition-colors">
            <ArrowLeft size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to site</span>
          </Link>
          
          {/* Note: In Next.js layouts, it's better to use a standard form for logout */}
          <form action="/api/admin/logout" method="POST">
            <button 
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-50 rounded-xl transition-colors active:scale-95"
            >
              <LogOut size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Logout</span>
            </button>
          </form>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 overflow-y-auto min-h-screen">
        {/* pt-20 removed here because the sidebar handles its own height */}
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
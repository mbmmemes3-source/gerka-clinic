"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) router.push("/admin/dashboard");
    else alert("Invalid Credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] p-6">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-[3rem] shadow-xl border border-zinc-200">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
             <Lock className="text-white" size={20} />
          </div>
          <h1 className="text-2xl font-light text-zinc-900 uppercase tracking-widest">Admin Portal</h1>
          <p className="text-zinc-400 text-xs uppercase tracking-widest">Gerka Clinic Management</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Authorized Email" 
            className="w-full p-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-zinc-200 outline-none transition-all text-sm" 
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Security Password" 
            className="w-full p-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-zinc-200 outline-none transition-all text-sm" 
            onChange={e => setPassword(e.target.value)} 
          />
          <button className="w-full bg-zinc-900 text-white py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-lg hover:bg-zinc-800 transition-all active:scale-95">
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
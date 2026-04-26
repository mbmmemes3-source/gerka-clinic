import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Phone, Mail, MessageSquare, Clock } from "lucide-react";

export default async function AdminDashboard() {
  const authCookie = cookies().get("admin_token");
  if (!authCookie) redirect("/admin");

  const appointments = await prisma.appointment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8 md:p-12 lg:p-16 space-y-10">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-3xl font-light text-zinc-900 tracking-tight text-4xl">Clinical Bookings</h1>
          <p className="text-zinc-500 text-sm font-light italic leading-relaxed">Overview of all patient appointments from Neon DB.</p>
        </div>
        <div className="px-6 py-2 bg-white border border-zinc-200 text-zinc-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
          {appointments.length} Total
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {appointments.map((apt) => (
          <div key={apt.id} className="bg-white border border-zinc-200 p-8 rounded-[2.5rem] hover:shadow-xl hover:border-zinc-300 transition-all duration-500 flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-6 flex-1">
              <div className="flex items-center gap-4">
                <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                  apt.status === 'PAID' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                }`}>
                  {apt.status}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-2 uppercase tracking-tighter">
                   <Clock size={12}/> {apt.createdAt.toLocaleString()}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-medium text-zinc-900 leading-none">{apt.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{apt.service}</p>
              </div>
              <div className="flex flex-wrap gap-6 text-[13px] text-zinc-600 font-light">
                <span className="flex items-center gap-2 border-r border-zinc-100 pr-6"><Phone size={14} className="text-zinc-300"/> {apt.phone}</span>
                <span className="flex items-center gap-2"><Mail size={14} className="text-zinc-300"/> {apt.email}</span>
              </div>
            </div>

            <div className="md:w-1/3 p-6 bg-[#FAF9F6] rounded-3xl border border-zinc-100 relative group">
              <MessageSquare className="absolute top-4 right-4 text-zinc-200 group-hover:text-zinc-300 transition-colors" size={24} />
              <p className="text-[9px] font-bold uppercase text-zinc-400 mb-2 tracking-widest">Clinical Note</p>
              <p className="text-sm text-zinc-600 font-light leading-relaxed italic">{apt.message || "No specific concerns provided."}</p>
            </div>

            <div className="flex flex-col justify-center text-left md:text-right md:pl-8 border-t md:border-t-0 md:border-l border-zinc-50 pt-6 md:pt-0">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Consultation Fee</p>
              <p className="text-4xl font-bold text-zinc-900">€{apt.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
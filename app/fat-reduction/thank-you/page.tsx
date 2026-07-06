import Link from "next/link"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-5">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-200/50 text-center">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} className="text-emerald-600" />
        </div>
        <h1 className="text-3xl font-light text-zinc-900 mb-4 tracking-tight">Request Received</h1>
        <p className="text-zinc-500 font-light mb-10 leading-relaxed">
          Thank you for reaching out. A specialist from Gerka Clinic will contact you within 24 hours to confirm your consultation.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-zinc-900 text-white px-8 py-4 rounded-2xl hover:bg-black transition-all"
        >
          <ArrowLeft size={14} /> Back to Homepage
        </Link>
      </div>
    </main>
  )
}
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const session_id = searchParams.session_id;

  if (!session_id) redirect("/");

  const session = await stripe.checkout.sessions.retrieve(session_id);

  if (session.payment_status !== "paid") redirect("/");

  const appointmentId = session.metadata?.appointmentId;

  if (!appointmentId) redirect("/");

  const appointment = await prisma.appointment.findUnique({
    where: { id: appointmentId },
  });

  if (!appointment) redirect("/");

  // 🔐 SECURITY CHECKS
  if (appointment.stripeSessionId !== session.id) redirect("/");

  if (session.amount_total !== appointment.amount * 100) redirect("/");

  // fallback update
  if (appointment.status !== "PAID") {
    await prisma.appointment.update({
      where: { id: appointmentId },
      data: { status: "PAID" },
    });
  }

  return (
  <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6 pt-23">
    <div className="max-w-md w-full bg-white p-10 rounded-[3rem] shadow-xl text-center space-y-6 border border-zinc-100">

      {/* Icon */}
      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
        <svg
          className="w-10 h-10 text-emerald-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-light text-zinc-900">
        Booking Confirmed
      </h1>

      {/* Description */}
      <p className="text-zinc-500 font-light leading-relaxed">
        Your payment has been successfully received. Our team will contact you
        within 24 hours to finalize your appointment.
      </p>

      {/* Details Card */}
      <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 text-left space-y-3">

        <div className="flex justify-between text-sm">
          <span className="text-zinc-400">Service</span>
          <span className="text-zinc-900 font-medium">{appointment.service}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-zinc-400">Name</span>
          <span className="text-zinc-900 font-medium">{appointment.name}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-zinc-400">Amount Paid</span>
          <span className="text-zinc-900 font-medium">
            €{appointment.amount}
          </span>
        </div>

        <div className="pt-3 border-t border-zinc-100 text-xs text-zinc-400 text-center break-all">
          Ref: {appointment.id}
        </div>
      </div>

      {/* Actions */}
      <div className="pt-4 flex flex-col gap-3">

        <a
          href="/"
          className="bg-zinc-900 text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#008d96] transition-all"
        >
          Return Home →
        </a>

        <a
          href="/#booking"
          className="text-zinc-500 text-xs uppercase tracking-widest hover:text-zinc-900 transition"
        >
          Book Another Appointment
        </a>

      </div>
    </div>
  </div>
);
}
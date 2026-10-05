import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Medical-Grade Skincare & Products | Gerka Clinic Dublin",
  description:
    "Explore our curated selection of medical-grade skincare and wellness products at Gerka Clinic Dublin. Formulations from ZO Skin Health, Sunekos, and more.",
  alternates: {
    canonical: "https://www.gerkaclinic.com/shop",
  },
  openGraph: {
    title: "Shop Medical-Grade Skincare | Gerka Clinic",
    description:
      "Explore medical-grade skincare formulations and treatments at Gerka Clinic Dublin.",
    url: "https://www.gerkaclinic.com/shop",
    siteName: "Gerka Clinic",
    type: "website",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

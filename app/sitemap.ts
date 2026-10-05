import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // revalidate at most once every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.gerkaclinic.com";

  // 1. Static high-priority pages and service landing pages
  const staticRoutes = [
    "",
    "/about",
    "/shop",
    "/blog",
    "/clinical-outcomes",
    "/peptide-skin-regeneration-therapy",
    "/skin-boosters-dublin",
    "/skin-peel-dublin",
    "/lichen-sclerosus-vulvar-health-dublin",
    "/regenerative-gynaecology-dublin",
    "/nail",
    "/hand-rejuvenation",
    "/hair-loss-treatments",
    "/earlobe-rejuvenation-lobuloplasty",
    "/fat-reduction",
    "/body-contouring",
    "/hydrafacial-scalp",
    "/womens-health/emsella",
    "/womens-health/prp",
    "/womens-health/labiaplasty",
    "/womens-health/private-smear-test-dublin",
    "/womens-health/vulval-lichen",
    "/womens-health/vaginal-dryness",
    "/womens-health/oshot-pshot",
    "/womens-health/vaginismus",
    "/womens-health/postpartum-scar",
    "/womens-health/exilis-ultra-femme",
    "/womens-health/hymenoplasty",
    "/womens-health/intimate-lesion-removal",
    "/womens-health/labia-rejuvenation-hyaluronic-acid",
    "/body/vanquish",
    "/body/lesion-removal",
    "/body/cellulite",
    "/body/desobody",
    "/body/pigmentation",
    "/body/exilis-body",
    "/body/postpartum-scar",
    "/face/exilis",
    "/face/prp-facial",
    "/face/skinvive",
    "/face/skin-lesion-removal",
    "/face/sunekos",
    "/face/profhilo",
    "/face/polynucleotides",
    "/face/cosmelan",
    "/face/hydrafacial",
    "/face/peels",
    "/face/anti-wrinkle",
    "/face/acne-rosacea",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/shop" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/womens-health") || route.startsWith("/face") || route.startsWith("/body") ? 0.8 : 0.7,
  }));

  // 2. Dynamic shop products from database
  let productEntries: MetadataRoute.Sitemap = [];
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        createdAt: true,
      },
    });

    productEntries = products.map((product) => ({
      url: `${baseUrl}/shop/${product.id}`,
      lastModified: product.createdAt ? new Date(product.createdAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Failed to fetch products for sitemap:", error);
  }

  // 3. Dynamic blog posts from database
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
        createdAt: true,
      },
    });

    blogEntries = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(blog.createdAt),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch blogs for sitemap:", error);
  }

  return [...staticEntries, ...productEntries, ...blogEntries];
}

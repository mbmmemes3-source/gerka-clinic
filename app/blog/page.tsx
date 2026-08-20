import Link from "next/link";
import { Home, ChevronRight, BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const revalidate = 0; // Disable caching to ensure dynamic content is always up to date

export default async function BlogListingPage() {
  // Fetch only published articles, ordered by date
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  const backgroundImages = [
    "/emsella.jpeg",
    "/vanquish.jpeg",
    "/skin.jpeg",
    "/prp.jpeg",
    "/labi.webp",
    "/exillis.jpeg",
    "/b3.webp",
    "/b1.webp"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO BANNER --- */}
      <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-white pt-32 pb-12 lg:pt-40">
        {/* Background Image Collage */}
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 opacity-30 grayscale p-4">
            {backgroundImages.map((src, i) => (
              <div 
                key={i} 
                className={`aspect-square rounded-2xl md:rounded-3xl bg-zinc-50 overflow-hidden ${
                  i > 5 ? "hidden sm:block" : ""
                }`}
              >
                <img 
                  src={src} 
                  alt="Clinic Detail" 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 bg-white border border-zinc-200 shadow-lg">
            Clinical Insights & Wellness
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-zinc-900 tracking-tighter leading-none mb-2">
            The Gerka <span className="italic font-serif text-zinc-500">Journal</span>
          </h1>

          <p className="text-zinc-600 font-light text-sm md:text-lg leading-relaxed max-w-xl mx-auto mb-4">
            Explore our latest clinical perspectives, medical updates, and professional guidance on skin health, gynaecology, and longevity.
          </p>

          {/* BREADCRUMB */}
          <div className="bg-white/90 backdrop-blur-md border border-zinc-100 shadow-sm px-6 py-3 rounded-full flex items-center gap-3">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 flex items-center gap-2 transition-colors">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={10} className="text-zinc-300" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Journal</span>
          </div>
        </div>
      </section>

      {/* --- BLOG GRID SECTION --- */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        {blogs.length === 0 ? (
          /* EMPTY STATE */
          <div className="text-center py-20 space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <BookOpen size={24} className="text-zinc-400" />
            </div>
            <h3 className="text-xl font-light text-zinc-900">No Publications Found</h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">
              We are currently preparing clinical insights and updates. Please check back soon.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-400 transition-all pt-4"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          /* ARTICLES LIST */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => {
              const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-IE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });

              // Rough reading time calculation (approx 200 words per minute)
              const wordCount = blog.content.split(/\s+/).length;
              const readingTime = Math.max(1, Math.ceil(wordCount / 200));

              return (
                <article 
                  key={blog.id} 
                  className={`group bg-white overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full border ${
                    blog.featured 
                      ? "border-zinc-900 shadow-md rounded-[2.5rem]" 
                      : "border-zinc-100 rounded-[2.5rem]"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Cover Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-50">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        loading="lazy"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-zinc-800 text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-zinc-100">
                          {blog.category || "General"}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {blog.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-zinc-900 text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm flex items-center gap-1 border border-zinc-800">
                            <Sparkles size={10} fill="currentColor" className="text-amber-400" /> Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Metadata & Content Summary */}
                    <div className="px-8 space-y-4">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} /> {formattedDate}
                        </span>
                        <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} /> {readingTime} Min Read
                        </span>
                      </div>

                      <h3 className="text-xl font-light text-zinc-900 group-hover:text-zinc-700 transition-colors tracking-tight leading-snug line-clamp-2">
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                      </h3>

                      <p className="text-zinc-500 font-light text-sm leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="px-8 pb-8 pt-6">
                    <Link 
                      href={`/blog/${blog.slug}`} 
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-900 group-hover:gap-3 transition-all border-b border-zinc-900 pb-1"
                    >
                      Read Article <ArrowRight size={14} className="text-zinc-500 group-hover:text-zinc-900" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

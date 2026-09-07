import Link from "next/link";
import { notFound } from "next/navigation";
import { Home, ChevronRight, Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const revalidate = 0; // Ensure dynamic content is always up to date

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = params;

  // Retrieve the blog post by its unique slug
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  // If the article does not exist or is not published, return a 404 page
  if (!blog || !blog.published) {
    notFound();
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Calculate reading time based on content length
  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

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
    <div className="bg-white min-h-screen pb-24 overflow-x-hidden">
      {/* --- HERO BANNER --- */}
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-white pt-28 sm:pt-32 pb-12 lg:pt-40 px-4 sm:px-6">
        {/* Background Image Collage */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 opacity-15 grayscale p-4">
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
          {/* Subtle gradient overlay to ensure text contrast and legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white" />
        </div>

        <div className="w-full max-w-5xl mx-auto px-2 sm:px-6 md:px-10 relative z-10 space-y-4 sm:space-y-6 text-center flex flex-col items-center">
          {/* Breadcrumbs */}
          <div className="max-w-full flex items-center justify-center gap-1.5 sm:gap-3 text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md border border-zinc-100 shadow-sm px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full overflow-hidden">
            <Link href="/" className="text-zinc-400 hover:text-zinc-900 flex items-center gap-1.5 transition-colors shrink-0">
              <Home size={12} /> <span className="inline">Home</span>
            </Link>
            <ChevronRight size={10} className="text-zinc-300 shrink-0" />
            <Link href="/blog" className="text-zinc-400 hover:text-zinc-900 transition-colors shrink-0">
              Journal
            </Link>
            <ChevronRight size={10} className="text-zinc-300 shrink-0" />
            <span className="text-zinc-900 truncate max-w-[110px] xs:max-w-[160px] sm:max-w-[220px] md:max-w-xs">{blog.title}</span>
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] font-bold text-zinc-400 uppercase tracking-wider pt-1">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} /> {formattedDate}
            </span>
            <span className="w-1 h-1 bg-zinc-300 rounded-full" />
            <span className="flex items-center gap-1.5">
              <Clock size={12} /> {readingTime} Min Read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 tracking-tight leading-tight max-w-4xl mx-auto break-words w-full px-2">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-zinc-500 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto italic px-2">
            {blog.excerpt}
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Back button */}
          <div className="flex justify-between items-center border-b border-zinc-100 pb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
            </Link>
          </div>

          {/* Cover Image */}
          <div className="w-full rounded-[2.5rem] overflow-hidden bg-[#FAF9F6] border border-zinc-100 shadow-sm flex justify-center">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-auto max-h-[650px] object-contain"
            />
          </div>

          {/* Rich Body Content */}
          <div 
            className="blog-content font-light text-zinc-700 leading-relaxed text-lg pt-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Bottom sharing/action panel */}
          <div className="border-t border-zinc-100 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-xs text-zinc-400 font-light">
              Published by Gerka Clinic Medical Team
            </div>
            
            <Link 
              href="/blog" 
              className="bg-zinc-900 text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-zinc-800 transition-all active:scale-95"
            >
              Back to Publications
            </Link>
          </div>

        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content p {
          margin-bottom: 0.85rem;
          line-height: 1.8;
          font-weight: 300;
          font-size: 1.1rem;
          color: #3f3f46; /* zinc-700 */
        }
        .blog-content h1,
        .blog-content h1 * {
          font-size: 2.25rem !important;
          font-weight: 600 !important;
          color: #18181b !important;
          letter-spacing: -0.02em !important;
          margin-top: 1.75rem !important;
          margin-bottom: 0.75rem !important;
          font-family: Georgia, Cambria, "Times New Roman", Times, serif !important;
        }
        .blog-content h2,
        .blog-content h2 * {
          font-size: 1.75rem !important;
          font-weight: 600 !important;
          color: #18181b !important;
          letter-spacing: -0.02em !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.5rem !important;
          font-family: Georgia, Cambria, "Times New Roman", Times, serif !important;
        }
        .blog-content h3,
        .blog-content h3 * {
          font-size: 1.4rem !important;
          font-weight: 600 !important;
          color: #18181b !important;
          margin-top: 1.25rem !important;
          margin-bottom: 0.5rem !important;
          font-family: Georgia, Cambria, "Times New Roman", Times, serif !important;
        }
        .blog-content ul {
          list-style-type: disc;
          padding-left: 1.75rem;
          margin-bottom: 1.75rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          font-weight: 300;
          font-size: 1.05rem;
          color: #3f3f46;
        }
        .blog-content ol {
          list-style-type: decimal;
          padding-left: 1.75rem;
          margin-bottom: 1.75rem;
        }
        .blog-content blockquote {
          border-left: 4px solid #e4e4e7; /* zinc-200 */
          padding-left: 1.5rem;
          font-style: italic;
          color: #71717a; /* zinc-500 */
          margin: 2rem 0;
        }
        .blog-content strong {
          font-weight: 600;
          color: #18181b;
        }
        .blog-content em, .blog-content i {
          font-style: italic;
          color: #27272a; /* zinc-800 */
        }
        .blog-content a {
          color: #18181b;
          text-decoration: underline;
          font-weight: 400;
        }
        .blog-content a:hover {
          color: #71717a;
        }
      `}} />
    </div>
  );
}

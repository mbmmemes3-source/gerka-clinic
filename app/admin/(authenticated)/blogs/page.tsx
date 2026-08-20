"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, Plus, Trash2, 
  Loader2, X, Upload,
  CheckCircle2, Info, Eye, Globe, Edit2
} from "lucide-react"
import { CldUploadWidget } from 'next-cloudinary'

// --- INTERNAL COMPONENT: CLOUDINARY UPLOAD ---
interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  onRemove: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, onRemove }) => {
  const restoreScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  };

  const handleSuccess = (result: any) => {
    if (result.event === "success") {
      onChange(result.info.secure_url);
      setTimeout(restoreScroll, 100);
    }
  };

  return (
    <div className="space-y-4 w-full">
      {value ? (
        <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-inner bg-zinc-50">
          <button 
            onClick={onRemove}
            type="button"
            className="absolute top-4 right-4 z-10 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors active:scale-95"
          >
            <X size={16} />
          </button>
          <img src={value} alt="Blog Cover" className="object-cover w-full h-full" />
        </div>
      ) : (
        <CldUploadWidget 
          onSuccess={handleSuccess}
          onClose={restoreScroll} 
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        >
          {({ open }) => {
            return (
              <div 
                onClick={() => open?.()}
                className="w-full aspect-[16/9] bg-[#FAF9F6] border-2 border-dashed border-zinc-200 rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 group cursor-pointer hover:border-zinc-400 transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-all">
                  <Upload size={20} className="text-zinc-400" />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Click to Upload Cover Image</p>
                  <p className="text-[9px] text-zinc-300 lowercase font-light">Cloudinary Secure Upload</p>
                </div>
              </div>
            );
          }}
        </CldUploadWidget>
      )}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  published: boolean;
  createdAt: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write")

  const [form, setForm] = useState({
    title: "", 
    excerpt: "", 
    content: "", 
    image: "", 
    published: true
  })

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/blogs")
      const data = await res.json()
      setBlogs(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error("Fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.image) return alert("Please upload a cover image first.")
    if (!form.title.trim()) return alert("Please enter a title.")
    if (!form.excerpt.trim()) return alert("Please enter a short description/excerpt.")
    if (!form.content.trim()) return alert("Please enter the blog content.")
    
    setIsSubmitting(true)
    try {
      const method = editingBlogId ? "PUT" : "POST"
      const body = editingBlogId ? { ...form, id: editingBlogId } : form
      const res = await fetch("/api/admin/blogs", {
        method,
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      })
      if (res.ok) {
        setShowForm(false)
        setEditingBlogId(null)
        setForm({ title: "", excerpt: "", content: "", image: "", published: true })
        setActiveTab("write")
        fetchBlogs()
      } else {
        const errorData = await res.json()
        alert(errorData.error || `Failed to ${editingBlogId ? 'update' : 'create'} blog post.`)
      }
    } catch (err) {
      alert("Error saving blog post")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog publication? This action is permanent.")) return
    try {
      const res = await fetch(`/api/admin/blogs?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        fetchBlogs()
      } else {
        alert("Failed to delete blog post.")
      }
    } catch (err) {
      alert("Error deleting blog post")
    }
  }

  const handleEdit = (blog: Blog) => {
    setEditingBlogId(blog.id)
    setForm({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      published: blog.published
    })
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const insertTag = (e: React.MouseEvent, startTag: string, endTag: string) => {
    e.preventDefault();
    const textarea = document.getElementById("content-textarea") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    const replacement = startTag + selectedText + endTag;

    const newValue = text.substring(0, start) + replacement + text.substring(end);
    setForm(prev => ({ ...prev, content: newValue }));

    // Refocus and select injected text
    setTimeout(() => {
      textarea.focus({ preventScroll: true });
      textarea.setSelectionRange(start + startTag.length, start + startTag.length + selectedText.length);
    }, 0);
  };

  return (
    <div className="p-8 md:p-12 lg:p-16 space-y-12">
      {/* HEADER SECTION */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-light text-zinc-900 tracking-tight">Blog Publications</h1>
          <p className="text-zinc-500 text-sm font-light italic leading-relaxed text-zinc-400">Write articles, clinical guides, and updates for the Gerka Journal.</p>
        </div>
        <button 
          onClick={() => {
            if (showForm) {
              setShowForm(false)
              setEditingBlogId(null)
              setForm({ title: "", excerpt: "", content: "", image: "", published: true })
              setActiveTab("write")
            } else {
              setShowForm(true)
              setEditingBlogId(null)
              setForm({ title: "", excerpt: "", content: "", image: "", published: true })
              setActiveTab("write")
            }
          }}
          className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-xl flex items-center gap-2 hover:bg-zinc-800 transition-all active:scale-95 animate-fade-in"
        >
          {showForm ? <X size={14} /> : <Plus size={14} />}
          {showForm ? (editingBlogId ? "Cancel Edit" : "Cancel Publication") : "Create Article"}
        </button>
      </section>

      {/* FORM DRAWER */}
      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 rounded-[3rem] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Left Column */}
               <div className="space-y-8">
                  {editingBlogId && (
                    <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl flex items-center gap-2">
                      <Info size={14} className="text-zinc-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Editing Mode (ID: {editingBlogId.substring(0, 8)}...)</span>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Cover Photography</label>
                    <ImageUpload 
                      value={form.image}
                      onChange={(url) => setForm({ ...form, image: url })}
                      onRemove={() => setForm({ ...form, image: "" })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Article Title</label>
                    <input 
                      required 
                      className="admin-input" 
                      placeholder="e.g. The Science of Emsella Rehabilitation" 
                      value={form.title} 
                      onChange={e => setForm({...form, title: e.target.value})} 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 ml-1">Short Summary / Excerpt</label>
                    <textarea 
                      required
                      className="admin-input h-32 pt-4 resize-none text-[13px] leading-relaxed" 
                      placeholder="Write a brief, catchy summary of the article to show in lists..." 
                      value={form.excerpt} 
                      onChange={e => setForm({...form, excerpt: e.target.value})} 
                    />
                  </div>
               </div>

               {/* Right Column */}
               <div className="space-y-8 flex flex-col justify-between">
                  <div className="space-y-2 flex-1 flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ml-1 mb-2 gap-2 border-b border-zinc-100 pb-2">
                      <div className="flex items-center gap-4">
                        <button 
                          type="button" 
                          onClick={() => setActiveTab("write")} 
                          className={`text-[10px] font-bold uppercase tracking-widest pb-1 border-b-2 transition-all ${
                            activeTab === "write" ? "border-zinc-900 text-zinc-900" : "border-transparent text-zinc-400 hover:text-zinc-600"
                          }`}
                        >
                          Write Content
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setActiveTab("preview")} 
                          className={`text-[10px] font-bold uppercase tracking-widest pb-1 border-b-2 transition-all ${
                            activeTab === "preview" ? "border-zinc-900 text-zinc-900" : "border-transparent text-zinc-400 hover:text-zinc-600"
                          }`}
                        >
                          Live Preview
                        </button>
                      </div>
                      
                      {activeTab === "write" && (
                        <div className="flex flex-wrap gap-1.5 animate-fade-in">
                          <button type="button" onClick={(e) => insertTag(e, "<h1>", "</h1>")} className="toolbar-btn" title="Heading 1">H1</button>
                          <button type="button" onClick={(e) => insertTag(e, "<h2>", "</h2>")} className="toolbar-btn" title="Heading 2">H2</button>
                          <button type="button" onClick={(e) => insertTag(e, "<p>", "</p>")} className="toolbar-btn" title="Paragraph">P</button>
                          <button type="button" onClick={(e) => insertTag(e, "<strong>", "</strong>")} className="toolbar-btn font-bold" title="Bold">B</button>
                          <button type="button" onClick={(e) => insertTag(e, "<em>", "</em>")} className="toolbar-btn italic" title="Italic">I</button>
                          <button type="button" onClick={(e) => insertTag(e, "<ul>\n  <li>", "</li>\n</ul>")} className="toolbar-btn" title="Bullet List">List</button>
                          <button type="button" onClick={(e) => insertTag(e, '<a href="https://">', "</a>")} className="toolbar-btn" title="Link">Link</button>
                        </div>
                      )}
                    </div>

                    {activeTab === "write" ? (
                      <textarea 
                        id="content-textarea"
                        required
                        className="admin-input h-full min-h-[350px] pt-4 text-xs leading-relaxed flex-1 font-mono" 
                        placeholder="Write your article here. Use the quick toolbar formatting options above to easily insert headers, lists, links, bold, and italic styling!" 
                        value={form.content} 
                        onChange={e => setForm({...form, content: e.target.value})} 
                      />
                    ) : (
                      <div className="admin-input h-full min-h-[350px] overflow-y-auto pt-4 flex-1 bg-[#FAF9F6] border border-zinc-200 rounded-[1.25rem] p-6 shadow-inner">
                        {form.content ? (
                          <div 
                            className="blog-content text-left" 
                            dangerouslySetInnerHTML={{ __html: form.content }}
                          />
                        ) : (
                          <p className="text-zinc-400 italic text-sm text-center pt-12 font-light">No content to preview yet. Start writing in the "Write Content" tab!</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Toggle Publishing */}
                  <div className="flex items-center gap-3 pt-4">
                    <input 
                      type="checkbox" 
                      id="published" 
                      className="w-5 h-5 accent-zinc-900 border-zinc-200 rounded cursor-pointer" 
                      checked={form.published}
                      onChange={e => setForm({...form, published: e.target.checked})}
                    />
                    <label htmlFor="published" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700 cursor-pointer select-none">
                      Publish Immediately to Journal
                    </label>
                  </div>

                  <div className="pt-4">
                     <button 
                       type="submit" 
                       disabled={isSubmitting} 
                       className="w-full bg-zinc-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl flex items-center justify-center gap-4 disabled:bg-zinc-300 transition-all active:scale-[0.99]"
                     >
                       {isSubmitting ? (
                         <Loader2 className="animate-spin" />
                       ) : (
                         <>
                           <Globe size={18} /> 
                           {editingBlogId ? "Save Changes" : "Publish to Gerka Clinic Journal"}
                         </>
                       )}
                     </button>
                  </div>
               </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ARTICLES LIST GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
           [1,2,3].map(i => <div key={i} className="h-64 bg-zinc-100 rounded-[2.5rem] animate-pulse border border-zinc-200" />)
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 hover:shadow-2xl transition-all group relative flex flex-col justify-between overflow-hidden">
               <div className="space-y-4">
                  {/* COVER IMAGE */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FAF9F6] border border-zinc-100 shadow-inner">
                    <img src={blog.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={blog.title} />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm ${
                        blog.published 
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                          : "bg-zinc-100 text-zinc-500 border-zinc-300"
                      }`}>
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </div>
                  </div>

                  {/* METADATA & TITLE */}
                  <div className="space-y-2">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                      {new Date(blog.createdAt).toLocaleDateString("en-IE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })}
                    </p>
                    <h4 className="text-lg font-medium text-zinc-900 leading-snug group-hover:text-zinc-700 transition-colors line-clamp-2">{blog.title}</h4>
                    <p className="text-zinc-400 text-xs font-light line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                  </div>
               </div>

               {/* ACTIONS */}
               <div className="mt-6 pt-4 border-t border-zinc-50 flex justify-between items-center">
                  <div className="flex gap-2">
                    <a 
                      href={`/blog/${blog.slug}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] font-bold text-zinc-500 hover:text-zinc-950 uppercase tracking-widest bg-zinc-50 hover:bg-zinc-100 px-4 py-2 rounded-full border border-zinc-100 transition-colors flex items-center gap-1.5"
                    >
                      <Eye size={12} /> View Page
                    </a>
                    <button 
                      onClick={() => handleEdit(blog)}
                      className="text-[10px] font-bold text-zinc-500 hover:text-zinc-950 uppercase tracking-widest bg-zinc-50 hover:bg-zinc-100 px-4 py-2 rounded-full border border-zinc-100 transition-colors flex items-center gap-1.5"
                    >
                      <Edit2 size={12} /> Edit
                    </button>
                  </div>
                  <button onClick={() => handleDelete(blog.id)} className="text-zinc-300 hover:text-red-500 transition-colors p-2 active:scale-90">
                    <Trash2 size={18}/>
                  </button>
               </div>
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        .admin-input {
          width: 100%;
          padding: 1rem;
          background-color: #FAF9F6;
          border-radius: 1.25rem;
          outline: none;
          border: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.875rem;
          color: #18181b;
        }
        .admin-input:focus {
          border-color: #d4d4d8;
          background-color: white;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
        }
        .toolbar-btn {
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.6rem;
          background-color: #FAF9F6;
          border: 1px solid #e4e4e7;
          border-radius: 0.5rem;
          color: #52525b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .toolbar-btn:hover {
          background-color: #f4f4f5;
          color: #18181b;
          border-color: #d4d4d8;
        }

        /* BLOG PREVIEW STYLES */
        .blog-content :global(p) {
          margin-bottom: 1.25rem;
          line-height: 1.6;
          font-weight: 300;
          font-size: 0.95rem;
          color: #3f3f46;
        }
        .blog-content :global(h1) {
          font-size: 1.75rem;
          font-weight: 300;
          color: #18181b;
          letter-spacing: -0.02em;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .blog-content :global(h2) {
          font-size: 1.4rem;
          font-weight: 400;
          color: #18181b;
          letter-spacing: -0.02em;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .blog-content :global(h3) {
          font-size: 1.2rem;
          font-weight: 400;
          color: #18181b;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-family: Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .blog-content :global(ul) {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content :global(li) {
          margin-bottom: 0.35rem;
          font-weight: 300;
          font-size: 0.9rem;
          color: #3f3f46;
        }
        .blog-content :global(ol) {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content :global(blockquote) {
          border-left: 4px solid #e4e4e7;
          padding-left: 1.25rem;
          font-style: italic;
          color: #71717a;
          margin: 1.5rem 0;
        }
        .blog-content :global(strong) {
          font-weight: 600;
          color: #18181b;
        }
        .blog-content :global(em), .blog-content :global(i) {
          font-style: italic;
          color: #27272a;
        }
        .blog-content :global(a) {
          color: #18181b;
          text-decoration: underline;
          font-weight: 400;
        }
        .blog-content :global(a:hover) {
          color: #71717a;
        }
      `}</style>
    </div>
  )
}

"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, Plus, Trash2, 
  Loader2, X, Upload,
  CheckCircle2, Info, Eye, Globe, Edit2, Pencil, Sparkles, Clock, Search,
  Heading1, Heading2, Pilcrow, Bold, Italic, Link as LinkIcon, List, ListOrdered, Quote, AlignLeft, AlignCenter, AlignRight, Undo, Redo
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
  category: string;
  featured: boolean;
  createdAt: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  
  const editorRef = useRef<HTMLDivElement>(null)

  const [editorState, setEditorState] = useState({
    bold: false,
    italic: false,
    ul: false,
    ol: false,
  })

  const updateEditorState = () => {
    if (typeof document !== 'undefined') {
      setEditorState({
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
        ul: document.queryCommandState('insertUnorderedList'),
        ol: document.queryCommandState('insertOrderedList'),
      })
    }
  }

  const [form, setForm] = useState({
    title: "", 
    excerpt: "", 
    content: "", 
    image: "", 
    published: true,
    category: "Clinical Insights",
    featured: false
  })

  useEffect(() => {
    fetchBlogs()
  }, [])

  // Sync editor contents on open or toggle edit item
  useEffect(() => {
    if (isModalOpen && editorRef.current) {
      editorRef.current.innerHTML = form.content || "<p><br></p>"
      // Force visual editor paragraph splits instead of div tags
      document.execCommand('defaultParagraphSeparator', false, 'p')
    }
  }, [isModalOpen, editingBlogId])

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
        closeModal()
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
      published: blog.published,
      category: blog.category || "Clinical Insights",
      featured: blog.featured || false
    })
    setIsModalOpen(true)
  }

  const handleAdd = () => {
    setEditingBlogId(null)
    setForm({
      title: "",
      excerpt: "",
      content: "",
      image: "",
      published: true,
      category: "Clinical Insights",
      featured: false
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingBlogId(null)
    setForm({
      title: "",
      excerpt: "",
      content: "",
      image: "",
      published: true,
      category: "Clinical Insights",
      featured: false
    })
  }

  const handleEditorInput = () => {
    if (editorRef.current) {
      setForm(prev => ({ ...prev, content: editorRef.current!.innerHTML }))
    }
  }

  const executeCommand = (command: string, value: string = "") => {
    document.execCommand(command, false, value)
    if (editorRef.current) {
      editorRef.current.focus()
    }
    handleEditorInput()
  }

  const handleToolbarAction = (e: React.MouseEvent, command: string, value: string = "") => {
    e.preventDefault()
    executeCommand(command, value)
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData.getData("text/plain")
    document.execCommand("insertText", false, text)
  }

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (blog.category && blog.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-8 md:p-12 lg:p-16 space-y-12">
      {/* HEADER SECTION */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-light text-zinc-900 tracking-tight flex items-center gap-3">
            <FileText className="text-zinc-500" size={32} />
            Blog Management
          </h1>
          <p className="text-zinc-500 text-sm font-light italic leading-relaxed text-zinc-400">Write articles, clinical insights, and updates for the Gerka Journal.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-xl flex items-center gap-2 hover:bg-zinc-800 transition-all active:scale-95 animate-fade-in"
        >
          <Plus size={14} /> Write Article
        </button>
      </section>

      {/* SEARCH BAR */}
      <div className="bg-white px-6 py-4 rounded-[2rem] border border-zinc-200 shadow-sm flex items-center gap-3">
        <Search className="text-zinc-400" size={18} />
        <input 
          type="text" 
          placeholder="Search articles by title or category..." 
          className="flex-1 outline-none text-zinc-700 placeholder:text-zinc-400 font-light text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* ARTICLES LIST GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
           [1,2,3].map(i => <div key={i} className="h-64 bg-zinc-100 rounded-[2.5rem] animate-pulse border border-zinc-200" />)
        ) : filteredBlogs.length === 0 ? (
          <div className="col-span-full p-16 text-center text-zinc-400 italic bg-white rounded-[2.5rem] border border-zinc-200 font-light">
            No articles found. Start writing!
          </div>
        ) : (
          filteredBlogs.map((blog: Blog) => {
            const wordCount = blog.content.split(/\s+/).length;
            const readingTime = Math.max(1, Math.ceil(wordCount / 200));

            return (
              <div key={blog.id} className="bg-white border border-zinc-200 rounded-[2.5rem] p-6 hover:shadow-2xl transition-all group relative flex flex-col justify-between overflow-hidden">
                 <div className="space-y-4">
                    {/* COVER IMAGE */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FAF9F6] border border-zinc-100 shadow-inner">
                      <img src={blog.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={blog.title} />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                        <span className={`text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm ${
                          blog.published 
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                            : "bg-zinc-100 text-zinc-500 border-zinc-300"
                        }`}>
                          {blog.published ? "Published" : "Draft"}
                        </span>
                        
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-zinc-800 text-[8px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-zinc-100">
                          {blog.category || "Clinical Insights"}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {blog.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-zinc-900 text-white text-[8px] font-bold uppercase tracking-widest rounded-full shadow-sm flex items-center gap-1 border border-zinc-805">
                            <Sparkles size={8} fill="currentColor" className="text-amber-400" /> Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* METADATA & TITLE */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString("en-IE", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                          })}
                        </span>
                        <span className="w-1 h-1 bg-zinc-200 rounded-full" />
                        <span className="flex items-center gap-1">
                          <Clock size={10} /> {readingTime} Min Read
                        </span>
                      </div>
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
                        <Pencil size={12} /> Edit
                      </button>
                    </div>
                    <button onClick={() => handleDelete(blog.id)} className="text-zinc-300 hover:text-red-500 transition-colors p-2 active:scale-90">
                      <Trash2 size={18}/>
                    </button>
                 </div>
              </div>
            );
          })
        )}
      </div>

      {/* --- ADD / EDIT GLASSMORPHIC MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-md overflow-y-auto">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white border border-zinc-200 rounded-[3rem] w-full max-w-5xl h-[92vh] shadow-2xl flex flex-col my-4 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-20 rounded-t-[3rem]">
                <div className="flex items-center gap-2.5">
                  <FileText className="text-zinc-900" size={20} />
                  <h2 className="text-xl font-medium text-zinc-900">
                    {editingBlogId ? "Edit Article" : "Write Article"}
                  </h2>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-zinc-50 rounded-full text-zinc-400 hover:text-zinc-600 transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body / Form */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 overflow-hidden h-[calc(92vh-80px)] pb-6">
                {/* Left Column: Image, Category & Status Options */}
                <div className="lg:col-span-1 space-y-6 overflow-y-auto pr-2 pb-6 max-h-full scrollbar-thin">
                  {editingBlogId && (
                    <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-[1.5rem] flex items-center gap-2">
                      <Info size={14} className="text-zinc-500 animate-pulse" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">Editing: {editingBlogId.substring(0, 8)}...</span>
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
                    <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest ml-1">Category</label>
                    <select 
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="admin-input-select"
                    >
                      <option value="Clinical Insights">Clinical Insights</option>
                      <option value="Women's Health">Women's Health</option>
                      <option value="Skin & Aesthetics">Skin & Aesthetics</option>
                      <option value="Wellness & Longevity">Wellness & Longevity</option>
                    </select>
                  </div>

                  {/* Publish & Featured switches styled premium */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-3 p-4 bg-[#FAF9F6] border border-zinc-100 rounded-[1.25rem] hover:border-zinc-200 transition-colors cursor-pointer select-none" onClick={() => setForm({ ...form, published: !form.published })}>
                      <input 
                        type="checkbox" 
                        id="published" 
                        className="w-4 h-4 accent-zinc-900 border-zinc-300 rounded cursor-pointer" 
                        checked={form.published}
                        onChange={(e) => setForm({ ...form, published: e.target.checked })}
                      />
                      <label htmlFor="published" className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 cursor-pointer">
                        Publish Immediately
                      </label>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-zinc-50 border border-zinc-100 rounded-[1.25rem] hover:border-zinc-200 transition-colors cursor-pointer select-none" onClick={() => setForm({ ...form, featured: !form.featured })}>
                      <input 
                        type="checkbox" 
                        id="featured" 
                        className="w-4 h-4 accent-zinc-900 border-zinc-300 rounded cursor-pointer" 
                        checked={form.featured}
                        onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                      />
                      <label htmlFor="featured" className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 cursor-pointer flex items-center gap-1">
                        <Sparkles size={10} className="text-zinc-600" fill={form.featured ? "currentColor" : "none"} /> Mark as Featured
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Title, Excerpt & Editor tabs */}
                <div className="lg:col-span-2 space-y-3 flex flex-col h-full overflow-hidden pb-4">
                  <div className="space-y-3 flex-1 flex flex-col min-h-0">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest ml-1">Article Title</label>
                      <input 
                        required 
                        className="admin-input font-medium text-base text-zinc-900" 
                        placeholder="e.g. The Science of Emsella Rehabilitation" 
                        value={form.title} 
                        onChange={e => setForm({...form, title: e.target.value})} 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest ml-1">Short Excerpt</label>
                      <textarea 
                        required
                        className="admin-input h-16 pt-2 resize-none text-[13px] leading-relaxed" 
                        placeholder="Write a brief, catchy summary of the article..." 
                        value={form.excerpt} 
                        onChange={e => setForm({...form, excerpt: e.target.value})} 
                      />
                    </div>

                    {/* Rich Editor */}
                    <div className="space-y-2 flex-grow flex flex-col min-h-0">
                      <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest ml-1">
                        Article Content
                      </label>
                      
                      <div className="flex-grow flex flex-col border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-sm animate-fade-in min-h-0">
                        {/* Editor Toolbar */}
                        <div className="flex flex-wrap items-center gap-1 p-2 bg-zinc-50 border-b border-zinc-200 sticky top-0 z-10">
                          {/* Headers */}
                          <div className="flex items-center gap-0.5">
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'formatBlock', '<h1>')} 
                              className="editor-toolbar-btn" 
                              title="Heading 1"
                            >
                              <Heading1 size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'formatBlock', '<h2>')} 
                              className="editor-toolbar-btn" 
                              title="Heading 2"
                            >
                              <Heading2 size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'formatBlock', '<p>')} 
                              className="editor-toolbar-btn" 
                              title="Paragraph"
                            >
                              <Pilcrow size={14} />
                            </button>
                          </div>

                          <div className="w-[1px] h-4 bg-zinc-200 mx-1" />

                          {/* Inline Formatting */}
                          <div className="flex items-center gap-0.5">
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'bold')} 
                              className={`editor-toolbar-btn ${editorState.bold ? 'bg-zinc-200 text-zinc-950 font-bold' : ''}`}
                              title="Bold"
                            >
                              <Bold size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'italic')} 
                              className={`editor-toolbar-btn ${editorState.italic ? 'bg-zinc-200 text-zinc-950' : ''}`}
                              title="Italic"
                            >
                              <Italic size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => {
                                e.preventDefault();
                                const url = prompt("Enter URL (e.g. https://example.com):");
                                if (url) executeCommand('createLink', url);
                              }} 
                              className="editor-toolbar-btn" 
                              title="Link"
                            >
                              <LinkIcon size={14} />
                            </button>
                          </div>

                          <div className="w-[1px] h-4 bg-zinc-200 mx-1" />

                          {/* Block formats */}
                          <div className="flex items-center gap-0.5">
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'insertUnorderedList')} 
                              className={`editor-toolbar-btn ${editorState.ul ? 'bg-zinc-200 text-zinc-950' : ''}`}
                              title="Bullet List"
                            >
                              <List size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'insertOrderedList')} 
                              className={`editor-toolbar-btn ${editorState.ol ? 'bg-zinc-200 text-zinc-950' : ''}`}
                              title="Numbered List"
                            >
                              <ListOrdered size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'formatBlock', '<blockquote>')} 
                              className="editor-toolbar-btn" 
                              title="Blockquote"
                            >
                              <Quote size={14} />
                            </button>
                          </div>

                          <div className="w-[1px] h-4 bg-zinc-200 mx-1" />

                          {/* Alignment */}
                          <div className="flex items-center gap-0.5">
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'justifyLeft')} 
                              className="editor-toolbar-btn" 
                              title="Align Left"
                            >
                              <AlignLeft size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'justifyCenter')} 
                              className="editor-toolbar-btn" 
                              title="Align Center"
                            >
                              <AlignCenter size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'justifyRight')} 
                              className="editor-toolbar-btn" 
                              title="Align Right"
                            >
                              <AlignRight size={14} />
                            </button>
                          </div>

                          <div className="w-[1px] h-4 bg-zinc-200 mx-1" />

                          {/* Undo / Redo */}
                          <div className="flex items-center gap-0.5">
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'undo')} 
                              className="editor-toolbar-btn" 
                              title="Undo"
                            >
                              <Undo size={14} />
                            </button>
                            <button 
                              type="button" 
                              onMouseDown={(e) => handleToolbarAction(e, 'redo')} 
                              className="editor-toolbar-btn" 
                              title="Redo"
                            >
                              <Redo size={14} />
                            </button>
                          </div>
                        </div>

                        <div 
                          ref={editorRef}
                          contentEditable
                          onInput={handleEditorInput}
                          onBlur={handleEditorInput}
                          onKeyUp={updateEditorState}
                          onMouseUp={updateEditorState}
                          onPaste={handlePaste}
                          className="editor-content-body w-full flex-grow p-6 bg-[#FAF9F6] focus:bg-white outline-none border border-transparent transition-all duration-300 text-left overflow-y-auto min-h-0"
                          data-placeholder="Write your full article here. Use the sticky toolbar above to format headings, bullet points, numbered lists, blockquotes, alignments, bold, italic, and links visually!"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-zinc-100 flex justify-end gap-3">
                    <button 
                      type="button" 
                      onClick={closeModal}
                      className="px-6 py-3 font-bold uppercase tracking-widest text-[9px] text-zinc-600 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-full transition-all"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold uppercase tracking-widest text-[9px] rounded-full transition-all shadow-lg flex items-center gap-2 disabled:bg-zinc-300 disabled:cursor-not-allowed active:scale-95"
                    >
                      {isSubmitting ? (
                        <Loader2 size={12} className="animate-spin" />
                      ) : (
                        <>
                          <Globe size={12} />
                          {editingBlogId ? "Update Article" : "Publish Article"}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
        .admin-input-select {
          width: 100%;
          padding: 1rem;
          background-color: #FAF9F6;
          border-radius: 1.25rem;
          outline: none;
          border: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.875rem;
          color: #18181b;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1rem;
          cursor: pointer;
        }
        .admin-input-select:focus {
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

        .editor-toolbar-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.75rem;
          height: 1.75rem;
          color: #71717a; /* zinc-500 */
          border-radius: 0.375rem;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .editor-toolbar-btn:hover {
          background-color: #e4e4e7; /* zinc-200 */
          color: #18181b; /* zinc-950 */
        }
        .editor-toolbar-btn:active {
          transform: scale(0.95);
        }

        .editor-content-body {
          width: 100%;
          min-height: 380px;
          max-height: 500px;
          padding: 1.5rem;
          background-color: #FAF9F6;
          outline: none;
          font-size: 0.95rem;
          color: #18181b;
          overflow-y: auto;
          transition: all 0.3s ease;
        }
        .editor-content-body:focus {
          background-color: white;
        }
        .editor-content-body:empty::before {
          content: attr(data-placeholder);
          color: #a1a1aa; /* zinc-400 */
          cursor: text;
        }

        /* STYLE INLINE ELEMENTS VISUALLY INSIDE PROFESSIONAL EDITOR */
        :global(.editor-content-body h1) {
          font-size: 2rem !important;
          font-weight: 600 !important;
          color: #18181b !important;
          letter-spacing: -0.02em !important;
          margin-top: 1.75rem !important;
          margin-bottom: 0.75rem !important;
          font-family: Georgia, Cambria, "Times New Roman", Times, serif !important;
          display: block !important;
        }
        :global(.editor-content-body h2) {
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          color: #18181b !important;
          letter-spacing: -0.02em !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.5rem !important;
          font-family: Georgia, Cambria, "Times New Roman", Times, serif !important;
          display: block !important;
        }
        :global(.editor-content-body p) {
          margin-bottom: 1.25rem !important;
          line-height: 1.6 !important;
          font-weight: 300 !important;
          font-size: 0.95rem !important;
          color: #3f3f46 !important;
          display: block !important;
        }
        :global(.editor-content-body ul) {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
          margin-bottom: 1.25rem !important;
          display: block !important;
        }
        :global(.editor-content-body ol) {
          list-style-type: decimal !important;
          padding-left: 1.5rem !important;
          margin-bottom: 1.25rem !important;
          display: block !important;
        }
        :global(.editor-content-body li) {
          margin-bottom: 0.35rem !important;
          font-weight: 300 !important;
          font-size: 0.95rem !important;
          color: #3f3f46 !important;
          display: list-item !important;
        }
        :global(.editor-content-body blockquote) {
          border-left: 4px solid #d4d4d8 !important;
          padding-left: 1.25rem !important;
          font-style: italic !important;
          color: #71717a !important;
          margin: 1.5rem 0 !important;
          display: block !important;
        }
        :global(.editor-content-body strong) {
          font-weight: 700 !important;
          color: #18181b !important;
        }
        :global(.editor-content-body em), :global(.editor-content-body i) {
          font-style: italic !important;
          color: #27272a !important;
        }
        :global(.editor-content-body a) {
          color: #18181b !important;
          text-decoration: underline !important;
          font-weight: 400 !important;
        }
      `}</style>
    </div>
  )
}

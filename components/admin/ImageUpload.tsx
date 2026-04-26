"use client"

import { CldUploadWidget } from 'next-cloudinary';
import { Upload, Image as ImageIcon, X } from 'lucide-react';
import React from 'react';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  onRemove: () => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  onRemove
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center gap-4">
        {value ? (
          /* PREVIEW STATE */
          <div className="relative aspect-square w-full max-w-[300px] rounded-[2rem] overflow-hidden border border-zinc-200">
            <button 
              onClick={onRemove}
              type="button"
              className="absolute top-4 right-4 z-10 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
            >
              <X size={16} />
            </button>
            <img src={value} alt="Upload" className="object-cover w-full h-full" />
          </div>
        ) : (
          /* UPLOAD STATE */
          <CldUploadWidget 
            onUpload={onUpload} 
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          >
            {({ open }) => {
              return (
                <div 
                  onClick={() => open()}
                  className="w-full aspect-[4/3] bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 group cursor-pointer hover:border-zinc-400 transition-all"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-all">
                    <Upload size={20} className="text-zinc-400" />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Upload Product Image</p>
                    <p className="text-[9px] text-zinc-300">JPG, PNG or WebP</p>
                  </div>
                </div>
              );
            }}
          </CldUploadWidget>
        )}
      </div>
    </div>
  );
};
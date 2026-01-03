// src/components/RetroCard.jsx
import React from 'react';

export default function RetroCard({ title, date, desc }) {
  return (
    <div className="
      group relative
      bg-[#ffffff]
      border-4 border-[#2f2f2f]
      p-6 mb-8
      shadow-[6px_6px_0px_0px_#2f2f2f]
      transition-all duration-100
      hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#4ecdc4]
      active:translate-y-1 active:shadow-none
      cursor-pointer
    ">
      <h3 className="text-[#ff6b6b] text-lg mb-2 leading-tight">{title}</h3>
      <div className="text-xs text-gray-500 mb-4">{date}</div>
      <p className="text-xs leading-relaxed text-[#2f2f2f]">{desc}</p>

      {/* 只有鼠标悬停时才显示的提示 */}
      <div className="hidden group-hover:block text-xs text-[#4ecdc4] text-right">
        &gt;&gt; CLICK TO READ
      </div>
    </div>
  );
}
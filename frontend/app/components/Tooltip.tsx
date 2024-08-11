"use client"

import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactElement;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-pointer h-fit w-fit"
      >
        {children}
      </div>

      {/* Tooltip */}
      {visible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-100 text-gray-800 text-[12px] font-semibold rounded shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};


// src/components/Learn/LessonButton.tsx
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface LessonButtonProps {
  active?: boolean;
  onClick?: () => void;
  size?: number;
  className?: string;
  icon?: React.ReactNode;
  tooltipContent?: React.ReactNode;
  index: number;
}

const LessonButton: React.FC<LessonButtonProps> = ({
  active = false,
  onClick = () => {},
  size = 24,
  className = "",
  icon,
  tooltipContent,
  index
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button 
        className={`${active ? 'bg-[#58cc02]' : 'bg-[#2b2b2b]'} text-white font-bold rounded-full
          shadow-[0_5px_0_${active ? '#58a700' : '#1f1f1f'}] hover:bg-${active ? '[#58cc02]/90' : '[#3b3b3b]'}
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out flex items-center justify-center ${className}`}
        onClick={() => {
          onClick();
          setShowTooltip(true);
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon || <Star size={size} fill={active ? "white" : "none"} stroke={active ? "white" : "#5b5b5b"} />}
      </button>
      {showTooltip && tooltipContent && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-lg p-4 w-64 z-10">
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default LessonButton;
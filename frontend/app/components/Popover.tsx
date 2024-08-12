import { useState } from 'react';

interface PopoverProps {
  isVisible: boolean;
  children: React.ReactElement;
}

function Popover({ isVisible, children }: PopoverProps) {
  return (
    isVisible && (
      <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-full max-w-xs bg-twitchGray-400 border border-twitchGray-200 rounded p-2">
        <div className="relative">
          { children }
        </div>
      </div>
    )
  );
}

export default Popover;
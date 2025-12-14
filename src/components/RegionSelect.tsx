import { useState, useRef, useCallback } from 'react';
import { useClickOutside } from '@hooks/ui/useClickOutside';
import type { tRegion } from '@/types/country';
import DownArrowIcon from '@/assets/down-arrow.svg?react';

interface RegionSelectProps {
  value: tRegion;
  onChange: (value: tRegion) => void;
}

const options: tRegion[] = [
  'All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

const RegionSelect: React.FC<RegionSelectProps> = ({ value, onChange }) => {
  const regionSelectRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickOutside({
    ref: regionSelectRef,
    handler: close,
  });

  return (
    <div className="relative w-[200px]" ref={regionSelectRef}>
      <button
        onClick={() => setIsOpen(o => !o)}
        className="text-grey-950 text-5 flex h-14 w-full cursor-pointer items-center justify-between rounded-[5px] bg-white px-6 text-left shadow-[0px_2px_9px_0px_#0000000E]"
      >
        {value}
        <DownArrowIcon />
      </button>

      {isOpen && (
        <ul className="absolute top-[calc(100%+8px)] z-10 w-full list-none overflow-hidden rounded-[5px] bg-white py-4 shadow-[0px_2px_9px_0px_rgba(0,0,0,0.055)]">
          {options.map(region => (
            <li
              key={region}
              onClick={() => {
                onChange(region);
                close();
              }}
              className="text-5 text-grey-950 cursor-pointer px-6 py-1 hover:bg-gray-100"
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegionSelect;

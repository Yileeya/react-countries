import { useStickyObserver } from '@hooks/shared/useStickyObserver.ts';
import LeftArrowIcon from '@/assets/left-arrow.svg?react';
import RouterButton from '@components/ui/RouterButton.tsx';

interface StickyBackButtonProps {
  to: string;
  extraTopDesktop?: number;
  extraTopMobile?: number;
  className?: string;
}

export function StickyBackButton({
  to,
  extraTopDesktop = 0,
  extraTopMobile = 0,
  className = '',
}: StickyBackButtonProps) {
  const { ref, isSticky } = useStickyObserver({
    offsetDesktop: extraTopDesktop,
    offsetMobile: extraTopMobile,
  });

  return (
    <>
      <div ref={ref} className="h-px" />
      <div className={`sticky z-20 ${className}`}>
        <RouterButton
          to={to}
          className={`text-5 md:text-4 shadow-[0_0_7px_0_#0000001A] transition-all duration-300 ${
            isSticky
              ? 'h-12 w-12 justify-center rounded-full border border-gray-200 shadow-2xl'
              : 'h-8 w-[104px] border-transparent md:h-10 md:w-[136px]'
          } `}
        >
          <LeftArrowIcon className="text-4" />
          {!isSticky && <span className="ml-2">Back</span>}
        </RouterButton>
      </div>
    </>
  );
}

export default StickyBackButton;

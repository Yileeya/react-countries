import { useEffect, type RefObject } from 'react';

type tUseClickOutsideOptions<T extends HTMLElement> = {
  ref: RefObject<T | null>;
  handler: (event: MouseEvent | PointerEvent) => void;
};

/**
 * 觸發在點擊 ref 以外區域時
 */
export function useClickOutside<T extends HTMLElement>({
  ref,
  handler,
}: tUseClickOutsideOptions<T>) {
  useEffect(() => {
    const listener = (event: MouseEvent | PointerEvent) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    // pointerdown 同時支援 mouse + touch
    document.addEventListener('pointerdown', listener);

    return () => {
      document.removeEventListener('pointerdown', listener);
    };
  }, [ref, handler]);
}

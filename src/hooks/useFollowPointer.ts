import { useEffect, useState, RefObject } from 'react';

export function useFollowPointer(
  ref: RefObject<HTMLElement>,
  isInside: boolean
) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current || !isInside) {
      setPoint({ x: 0, y: 0 });
      return;
    }

    const handleHover = ({ clientX, clientY }: MouseEvent) => {
      const el = ref.current;

      if (!el) {
        return;
      }

      const x = clientX - el.offsetLeft - el.offsetWidth / 2;
      const y = clientY - el.offsetTop - el.offsetHeight / 2;
      setPoint({ x, y });
    };

    document.addEventListener('pointermove', handleHover);

    return () => document.removeEventListener('pointermove', handleHover);
  }, [isInside, ref]);

  return point;
}

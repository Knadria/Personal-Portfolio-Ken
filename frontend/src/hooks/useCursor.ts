import { useEffect, useRef, useCallback } from "react";

interface CursorState {
  x: number;
  y: number;
  dotX: number;
  dotY: number;
  visible: boolean;
  expanded: boolean;
}

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<CursorState>({
    x: 0, y: 0,
    dotX: 0, dotY: 0,
    visible: false,
    expanded: false,
  });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const s = stateRef.current;
    // Smooth follow for the outer ring (lerp)
    s.x += (s.dotX - s.x) * 0.12;
    s.y += (s.dotY - s.y) * 0.12;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${s.dotX}px, ${s.dotY}px) translate(-50%, -50%)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      stateRef.current.dotX = e.clientX;
      stateRef.current.dotY = e.clientY;

      if (!stateRef.current.visible) {
        stateRef.current.x = e.clientX;
        stateRef.current.y = e.clientY;
        stateRef.current.visible = true;
        cursorRef.current?.classList.add("cursor--visible");
        dotRef.current?.classList.add("cursor--visible");
      }
    };

    const handleLeave = () => {
      stateRef.current.visible = false;
      cursorRef.current?.classList.remove("cursor--visible");
      dotRef.current?.classList.remove("cursor--visible");
    };

    const handleDown = () => {
      stateRef.current.expanded = true;
      cursorRef.current?.classList.add("cursor--pressed");
    };

    const handleUp = () => {
      stateRef.current.expanded = false;
      cursorRef.current?.classList.remove("cursor--pressed");
    };

    // Magnetic effect on interactive elements
    const handleInteractiveEnter = (e: Event) => {
      cursorRef.current?.classList.add("cursor--hover");
    };

    const handleInteractiveLeave = () => {
      cursorRef.current?.classList.remove("cursor--hover");
    };

    const attachMagnetic = () => {
      document
        .querySelectorAll<HTMLElement>("a, button, [data-cursor]")
        .forEach((el) => {
          el.addEventListener("mouseenter", handleInteractiveEnter);
          el.addEventListener("mouseleave", handleInteractiveLeave);
        });
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    // Attach after mount + after any route changes
    attachMagnetic();
    const observer = new MutationObserver(attachMagnetic);
    observer.observe(document.body, { childList: true, subtree: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return { cursorRef, dotRef };
}
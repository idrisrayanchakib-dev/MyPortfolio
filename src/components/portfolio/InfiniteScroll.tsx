import { ReactNode, useRef, useEffect, useState } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  speed?: number; // pixels per second
  direction?: "left" | "right";
}

const InfiniteScroll = ({ 
  children, 
  speed = 60, 
  direction = "left" 
}: InfiniteScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth);
    }
  }, [children]);

  const duration = width > 0 ? width / speed : 0;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          width: width ? width * 2 : "auto", // total width of both copies
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
        }}
      >
        <div ref={containerRef} className="flex gap-12">
          {children}
        </div>
        <div className="flex gap-12">{children}</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;

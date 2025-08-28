import { motion } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";
import { useScreenSpeed } from "@/hooks/useScreenSpeed";

interface InfiniteScrollProps {
  children: ReactNode;
  desktopSpeed?: number;
  mobileSpeed?: number;
  direction?: "left" | "right";
}

const InfiniteScroll = ({
  children,
  desktopSpeed = 15,
  mobileSpeed = 25,
  direction = "left",
}: InfiniteScrollProps) => {
  const speed = useScreenSpeed(desktopSpeed, mobileSpeed);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth;
      setContentWidth(width);
    }
  }, [children]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ width: contentWidth * 2 }}
        animate={{ x: direction === "left" ? [-0, -contentWidth] : [-contentWidth, 0] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div ref={containerRef} className="flex gap-12">
          {children}
        </div>
        <div className="flex gap-12">{children}</div>
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;

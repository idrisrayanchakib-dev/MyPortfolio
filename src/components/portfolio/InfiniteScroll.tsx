import { ReactNode } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  speed?: number; // seconds per full cycle
  direction?: "left" | "right";
}

// Number of copies — enough to cover any viewport width seamlessly
const N = 6;
// translateX amount = -(100 / N)% = exactly one copy width
const TRANSLATE = `${-(100 / N).toFixed(6)}%`;

const InfiniteScroll = ({
  children,
  speed = 22,
  direction = "left",
}: InfiniteScrollProps) => {
  const id = direction; // unique per direction
  const keyframeName = `marquee-infinite-${id}`;

  const keyframeCSS = `
    @keyframes ${keyframeName} {
      0%   { transform: translateX(${direction === "left" ? "0" : TRANSLATE}); }
      100% { transform: translateX(${direction === "left" ? TRANSLATE : "0"}); }
    }
  `;

  return (
    <>
      {/* Inject dynamic keyframe — minimal, no layout impact */}
      <style>{keyframeCSS}</style>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        {/*
          Track = max-content = N × one-copy-width.
          translateX(-(100/N)%) = exactly one copy → seamless, no gap.
          N=6 ensures the track is always wider than the viewport.
        */}
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: `${keyframeName} ${speed}s linear infinite`,
            willChange: "transform",
          }}
        >
          {Array.from({ length: N }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              {children}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;

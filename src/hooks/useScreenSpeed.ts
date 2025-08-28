// useScreenSpeed.ts
import { useEffect, useState } from "react";

export const useScreenSpeed = (desktopSpeed = 15, mobileSpeed = 25) => {
  const [speed, setSpeed] = useState(mobileSpeed);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth >= 768) {
        setSpeed(desktopSpeed); // faster on desktop
      } else {
        setSpeed(mobileSpeed); // slower on mobile
      }
    };

    updateSpeed(); // run once on mount
    window.addEventListener("resize", updateSpeed);

    return () => window.removeEventListener("resize", updateSpeed);
  }, [desktopSpeed, mobileSpeed]);

  return speed;
};

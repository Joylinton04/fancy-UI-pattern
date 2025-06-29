import React, { type ReactNode } from "react";
import { cn } from "../lib/utils";

interface LightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className: string;
}

const Flashlight = ({ children, className}: LightProps) => {
  return (
    <div
      className={cn(
        "relative text-white",
        "after:content-[''] after:absolute after:inset-0 after:z-0 after:block",
        "after:bg-[radial-gradient(circle_at_top_right,_rgba(240,240,240,0.5)_0%,_rgba(240,240,240,0.3)_5%,_#19181A_60%)]",
        className
      )}
    >
      {/* children inherit the glow */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Flashlight;

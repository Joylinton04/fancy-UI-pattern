import React, { Children, useEffect, useRef, type ReactNode } from "react";
import { cn } from "../lib/utils";

interface NeonGradientCardProp {
  children: ReactNode;
  neonColors: { firstColor: "#ff00aa"; secondColor: "#00FFF1" };
}

const NeonGradientCard: React.FC<NeonGradientCardProp> = ({
  children,
  /**
   * @default "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }"
   * @type string
   * @description
   * The colors of the neon gradient
   * */
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      console.log(offsetWidth);
    }
  }, []);

  return <div 
  ref={containerRef} className="relative size-fit z-10">
  <div
    className={cn(
      "relative size-full",
      "after:content-[''] after:absolute after:inset-0 after:-z-10",
      "after:block after:bg-red-500",

      "before:block before:bg-red-500/50 before:blur-2xl",
      "before:content-[''] before:absolute before:inset-[-1rem] before:-z-10",
    )}
  >
    {children}
  </div>
</div>

};

export default NeonGradientCard;

import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
     if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      className="relative size-fit z-10 max-w-full w-fit"
      style={
        {
          "--neon-primary": neonColors.firstColor,
          "--neon-secondary": neonColors.secondColor,
          "--pseudo-element-width": `${dimensions.width}px`,
          "--pseudo-element-height": `${dimensions.height}px`,
          "--after-blur": `${dimensions.width / 6}px`,
        } as CSSProperties
      }
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] bg-transparent",
          "after:content-[''] after:absolute after:inset-0 after:-z-10",
          "after:block after:bg-red-500",

          "before:block before:bg-[linear-gradient(green)] before:blur-[var(--after-blur)]",
          "before:content-[''] before:absolute before:inset-[-0.09em] before:-z-10",
          // "before:bg-[length:10em_10em]"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default NeonGradientCard;

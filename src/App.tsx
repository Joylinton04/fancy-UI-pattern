import React from "react";
import { cn } from "./lib/utils";
import NeonGradientCard from "./components/neon-gradient-card";

const App = () => {
  return (
    <div className="px-6 font-manrope min-h-screen w-full bg-[#19181A] text-white">
      <div className="text-center text-6xl font-bold font-bricolage py-8 z-0 italic relative">
        <h1
          className={cn(
            "relative z-0 inline-flex text-balance text-green-500",

            "after:absolute after:text-nowrap after:left-[0.06em] after:top-[0.08em] after:content-[attr(data-text)] after:-z-10",

            "after:bg-[linear-gradient(45deg,transparent_45%,green_45%,green_55%,transparent_0)]",

            "after:bg-[length:0.09em_0.06em]  after:text-transparent after:bg-clip-text"
          )}
          data-text={"Fancy UI Patterns"}
        >
          Fancy UI Patterns
        </h1>
      </div>
      <div className="flex gap-[20rem] items-center">
        <div
          className={cn(
            "w-40 h-40",
            "bg-[linear-gradient(45deg,transparent_45%,green_45%,blue_55%,transparent_0)] bg-[length:0.3em_0.3em]"
          )}
        ></div>

        <NeonGradientCard 
        neonColors={{
            firstColor: "#ff00aa",
            secondColor: "#00FFF1",
          }}>
          <div className="bg-zinc-800 w-40 h-40 text-xs grid place-content-center font-bricolage">
            Lorem ipsu
          </div>
        </NeonGradientCard>
      </div>
    </div>
  );
};
export default App;

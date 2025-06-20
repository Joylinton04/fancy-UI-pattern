import React from "react";
import { cn } from "./lib/utils";

const App = () => {
  return (
    <div className="px-6 font-manrope min-h-screen w-full">
      <div className="text-center text-6xl font-bold font-bricolage py-8 z-0 italic relative">
        <h1
          className={cn(
            "relative z-0 inline-flex text-balance",

            "after:absolute after:text-nowrap after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)] after:-z-10",

            // "after:bg-[linear-gradient(45deg,transparent_45%,green_45%,green_55%,transparent_0)]",
            "after:bg-[linear-gradient(45deg,transparent_45%,green_45%,blue_55%,transparent_0)]",
            
            "after:bg-[length:0.05em_0.05em]  after:text-transparent after:bg-clip-text",
             /* after: after:bg-clip-text after:text-transparent */
          )}
          data-text={"Fancy UI Patterns"}
        >
          Fancy UI Patterns
        </h1>
      </div>

      <div className={cn(
        "w-40 h-40 border",
        "bg-[linear-gradient(45deg,transparent_45%,green_45%,blue_55%,transparent_0)] bg-[length:0.3em_0.3em]"
      )}>
      </div>
    </div>
  );
};
/* 
<div className="px-6 font-manrope">
  <div className="text-center text-6xl font-bold font-bricolage py-8 z-0 italic text-green-500">
    <h1
      className={cn(
        "relative",
        "after:absolute after:content-[attr(data-text)] after:top-0 after:left-0",
        "after:text-white after:z-[-1]" // optional styles for the shadow text
      )}
      data-text={"Fancy UI Pattern"}
    >
      Fancy UI Pattern
    </h1>
  </div>
</div>

*/
export default App;

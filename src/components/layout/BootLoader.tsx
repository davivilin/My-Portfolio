import { useState, useEffect } from "react";

const BootLoader = () => {
  const [progress, setProgress] = useState(0);

  // CHANGED: If URL has a hash (like #projects), start hidden (false). Otherwise, show loader (true).
  const [isVisible, setIsVisible] = useState(!window.location.hash);
  
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // If we are starting hidden, do not run the animation logic
    if (!isVisible) return;

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    // Minimum display time of 2 seconds, then fade out
    const minDisplayTime = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match CSS transition duration
    }, 2000);

    // Cleanup
    return () => {
      clearInterval(progressInterval);
      clearTimeout(minDisplayTime);
    };
  }, [isVisible]); // Added isVisible dependency

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(260 40% 8%) 0%, hsl(252 50% 15%) 50%, hsl(260 40% 8%) 100%)",
      }}
    >
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)",
        }}
      />

      {/* Boot content */}
      <div className="text-center px-4">
        {/* Logo */}
        <div className="text-6xl mb-8 animate-float">🪻</div>

        {/* Boot text */}
        <h1 className="font-pixel text-primary text-sm sm:text-base mb-8 neon-glow">
          INITIALIZING DREAM_OS...
        </h1>

        {/* Progress bar container */}
        <div className="w-64 sm:w-80 mx-auto">
          {/* Outer border - pixel style */}
          <div 
            className="h-6 relative border-2 border-primary/60 bg-background/20"
            style={{
              boxShadow: "0 0 20px hsl(var(--neon-glow) / 0.3)",
            }}
          >
            {/* Inner progress */}
            <div
              className="h-full transition-all duration-150 ease-out"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: `repeating-linear-gradient(
                  90deg,
                  hsl(var(--primary)) 0px,
                  hsl(var(--primary)) 8px,
                  hsl(var(--primary) / 0.7) 8px,
                  hsl(var(--primary) / 0.7) 12px
                )`,
                boxShadow: "0 0 10px hsl(var(--neon-glow))",
              }}
            />
             
            {/* Pixel grid overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "repeating-linear-gradient(90deg, transparent 0px, transparent 10px, hsl(0 0% 0% / 0.2) 10px, hsl(0 0% 0% / 0.2) 12px)",
              }}
            />
          </div>

          {/* Progress percentage */}
          <p className="mt-4 font-mono text-sm text-primary/80">
            Loading... {Math.min(Math.floor(progress), 100)}%
          </p>
        </div>

        {/* Boot messages */}
        <div className="mt-8 font-mono text-xs text-muted-foreground/60 space-y-1">
          <p className={progress > 20 ? "opacity-100" : "opacity-0"}>
            &gt; Loading system components...
          </p>
          <p className={progress > 50 ? "opacity-100" : "opacity-0"}>
            &gt; Initializing user interface...
          </p>
          <p className={progress > 80 ? "opacity-100" : "opacity-0"}>
            &gt; Welcome, User.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootLoader;